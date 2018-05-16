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
        category: '',
        amount: '',
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

    const totalAmounts = orders.reduce((acc, next) => {
      return (
        acc +
        next.items.reduce((sum, item) => sum + item.rate * item.quantity, 0)
      );
    }, 0);
    const invoicedAmounts = orders
      .filter(order => order.delivery.invoiced)
      .reduce((acc, next) => {
        return next.items.reduce(
          (sum, item) => sum + item.rate * item.quantity,
          0
        );
      }, 0);
    const { projection } = this.state;
    return (
      <Container>
        <h1>
          {projection.salesHead} <small>Analysis</small>
        </h1>
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
            <tr>
              <td>{projection.category}</td>
              <td>{projection.amount}</td>
              <td>{invoicedAmounts}</td>
              <td>{Math.max(projection.amount - invoicedAmounts, 0)}</td>
              <td>{totalAmounts - invoicedAmounts}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default AnalysisView;
