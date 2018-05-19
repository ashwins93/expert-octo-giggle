import React from 'react';
import * as api from '../api';
import { Table, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      orders: [],
      showPendingFor: ''
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
              <th />
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
                <td style={{ width: '10%' }}>
                  <Button
                    color="info"
                    size="sm"
                    onClick={() =>
                      this.setState({
                        showPendingFor: result.category
                      })
                    }
                  >
                    View Pending
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {this.state.showPendingFor !== '' ? (
          <React.Fragment>
            <h3 className="fade">Pending Orders</h3>
            <Table className="fade">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Distributor</th>
                  <th>Category</th>
                  <th className="text-right">Order Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {orders
                  .filter(
                    order =>
                      !order.delivery.invoiced &&
                      order.category === this.state.showPendingFor
                  )
                  .map((order, index) => (
                    <tr key={order.id}>
                      <td>{index + 1}</td>
                      <td>{order.order.orderReceivedOn}</td>
                      <td>{order.contact.distributor}</td>
                      <td>{order.category}</td>
                      <td className="text-right pr-3">
                        {order.items.reduce(
                          (acc, next) => acc + next.quantity * next.rate,
                          0
                        )}
                      </td>
                      <td>
                        <Link to={`/orders/${order.id}`}>View</Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </React.Fragment>
        ) : (
          ''
        )}
      </Container>
    );
  }
}

export default AnalysisView;
