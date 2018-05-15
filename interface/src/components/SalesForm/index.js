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

  render() {
    return (
      <Container className="py-5">
        <h1>Enter new sale order</h1>
        <Form>
          <Row>
            <Col>
              <OrderDetails />
            </Col>
            <Col>
              <ContactDetails />
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
          <ItemList items={this.state.items} />
          <hr />
          <DeliveryDetails />
        </Form>
      </Container>
    );
  }
}

export default SalesForm;
