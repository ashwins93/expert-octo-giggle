import React, { Component } from 'react';
import * as api from '../api';
import { Table, Container } from 'reactstrap';
import Link from 'react-router-dom/Link';

class OrdersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    api.fetchAllOrders().then(orders =>
      this.setState({
        orders
      })
    );
  }

  render() {
    return (
      <Container className="py-5 fade">
        <h1>Orders</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Sales Head</th>
              <th>Distributor</th>
              <th>Category</th>
              <th className="text-right">Order Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.order.orderReceivedOn}</td>
                <td>{order.contact.salesHead}</td>
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
      </Container>
    );
  }
}

export default OrdersView;
