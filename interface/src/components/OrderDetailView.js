import React from 'react';
import { fetchOrder } from '../api';
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Table,
  Row,
  Col
} from 'reactstrap';

class OrderDetailView extends React.Component {
  state = {
    category: '',
    contact: { salesHead: '', distributor: '', endUser: '' },
    delivery: {
      courier: '',
      deliveryDate: '',
      dispatchDate: '',
      invoiceNo: '',
      invoiced: false,
      pendingPayments: '',
      podNo: '',
      remarks: '',
      supply: ''
    },
    items: [],
    order: {
      orderReceivedOn: '',
      orderReceivedThrough: '',
      originalOrder: ''
    }
  };

  componentDidMount() {
    fetchOrder(this.props.match.params.id).then(order => {
      this.setState(order);
    });
  }

  render() {
    const order = this.state;
    return (
      <Container className="mt-3 fade">
        <Row>
          <Col sm={6}>
            <Card>
              <CardBody>
                <CardTitle>Order</CardTitle>
                <CardText>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Order Received On</td>
                        <td> {order.order.orderReceivedOn}</td>
                      </tr>
                      <tr>
                        <td>Order Received Through</td>
                        <td>{order.order.orderReceivedThrough}</td>
                      </tr>
                      <tr>
                        <td>Orignal Order Copy Received On</td>
                        <td>{order.order.originalOrder}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <CardBody>
                <CardTitle>Contact</CardTitle>
                <CardText>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Sales Head</td>
                        <td> {order.contact.salesHead}</td>
                      </tr>
                      <tr>
                        <td>Distributor</td>
                        <td>{order.contact.distributor}</td>
                      </tr>
                      <tr>
                        <td>End User</td>
                        <td>{order.contact.endUser}</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Table className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name of the item</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.rate}</td>
                <td>{item.rate * item.quantity}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} />
              <td>Total</td>
              <td>
                {order.items.reduce(
                  (acc, next) => acc + next.rate * next.quantity,
                  0
                )}
              </td>
            </tr>
          </tbody>
        </Table>
        <Card>
          <CardBody>
            <CardTitle>Delivery Details</CardTitle>
            <CardText>
              <Table>
                <tr>
                  <td>Supply</td>
                  <td>{order.delivery.supply}</td>
                  <td>Delivery Date</td>
                  <td>{order.delivery.deliveryDate}</td>
                </tr>
                <tr>
                  <td>Invoiced</td>
                  <td>{order.delivery.invoiced ? 'Yes' : 'No'}</td>
                  <td>POD No.</td>
                  <td>{order.delivery.podNo}</td>
                </tr>
                <tr>
                  <td>Courier</td>
                  <td>{order.delivery.courier}</td>
                  <td>Invoice No.</td>
                  <td>{order.delivery.invoiceNo}</td>
                </tr>
                <tr>
                  <td>Date of Dispatch</td>
                  <td>{order.delivery.dispatchDate}</td>
                  <td>Pending Payments</td>
                  <td>{order.delivery.pendingPayments}</td>
                </tr>
                <tr>
                  <td>Remarks</td>
                  <td>{order.delivery.remarks}</td>
                </tr>
              </Table>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default OrderDetailView;
