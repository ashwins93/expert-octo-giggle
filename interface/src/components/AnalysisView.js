import React from 'react';
import * as api from '../api';
import { Table, Container } from 'reactstrap';

class AnalysisView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projection: {
        projectionStart: '',
        projectionEnd: '',
        categories: [],
        salesHead: ''
      },
      orders: []
    };
  }

  componentDidMount() {
    const { match } = this.props;

    api.fetchProjection(match.params.id).then(projection => {
      this.setState({
        projection
      });
    });
    api.fetchAllOrders().then(orders =>
      this.setState({
        orders
      })
    );
  }

  render() {
    const orders = this.state.orders.filter(order => {
      if (order.contact.salesHead !== this.state.projection.salesHead)
        return false;
      let startDate = new Date(this.state.projection.projectionStart);
      let endDate = new Date(this.state.projection.projectionEnd);
      let orderDate = new Date(order.order.orderReceivedOn);
      if (orderDate <= startDate || orderDate >= endDate) return false;
      return true;
    });
    const { projection } = this.state;
    const ensemble = projection.categories.map(projection => {
      const result = {
        category: projection.category,
        amount: projection.amount
      };
      const totalValue = orders
        .filter(order => order.category === projection.category)
        .reduce((acc, next) => {
          return (
            acc +
            next.items.reduce((sum, item) => sum + item.rate * item.quantity, 0)
          );
        }, 0);
      result.actual = orders
        .filter(order => {
          return (
            order.delivery.invoiced && order.category === projection.category
          );
        })
        .reduce((acc, next) => {
          return (
            acc +
            next.items.reduce((sum, item) => sum + item.rate * item.quantity, 0)
          );
        }, 0);
      result.pending = totalValue - result.actual;
      result.shortFall = Math.max(result.amount - result.actual, 0);
      return result;
    });
    return (
      <Container className="fade">
        <h1>
          {projection.salesHead} <small>Analysis</small>
        </h1>
        <p>
          {projection.projectionStart} to {projection.projectionEnd}
        </p>
        <Table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Projected</th>
              <th>Actual</th>
              <th>Shortfall</th>
              <th>Pending</th>
            </tr>
          </thead>
          <tbody>
            {ensemble.map((result, index) => (
              <tr key={index}>
                <td>{result.category}</td>
                <td>{result.amount}</td>
                <td>{result.actual}</td>
                <td>{result.shortFall}</td>
                <td>{result.pending}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default AnalysisView;
