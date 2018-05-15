import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import ContactDetails from './ContactDetails';
import ItemList from './ItemList';
import DeliveryDetails from './DeliveryDetails';
import {
  Container,
  Row,
  Col,
  Form,
  CustomInput,
  FormGroup,
  Label
} from 'reactstrap';

class SalesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderReceivedOn: '',
      orderReceivedThrough: '',
      originalOrder: '',
      items: [
        {
          name: 'EXD RR',
          quantity: 3,
          rate: 4
        },
        {
          name: 'R-1',
          quantity: 5,
          rate: 6
        }
      ]
    };
  }

  addItem = item =>
    this.setState({
      items: [...this.state.items, item]
    });

  removeItem = index =>
    this.setState({
      items: this.state.items.filter((item, idx) => index !== idx)
    });

  handleChange = name => predicate => ({ target }) => {
    if (predicate(target.value)) {
      this.setState({
        name: target.value
      });
    }
  };

  render() {
    const { orderReceivedOn, orderReceivedThrough, originalOrder } = this.state;

    return (
      <Container className="py-5">
        <h1>Enter new sale order</h1>
        <Form>
          <Row>
            <Col>
              <OrderDetails handleChange={this.handleChange} {...order} />
            </Col>
            <Col>
              <ContactDetails handleChange={this.handleChange} />
            </Col>
          </Row>
          <hr />
          <FormGroup row>
            <Label sm={{ size: 3, offset: 6 }}>Category</Label>
            <Col sm={3}>
              <CustomInput type="select">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </CustomInput>
            </Col>
          </FormGroup>
          <ItemList
            items={this.state.items}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
          <hr />
          <DeliveryDetails />
        </Form>
      </Container>
    );
  }
}

export default SalesForm;
