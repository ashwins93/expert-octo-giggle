import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import ContactDetails from './ContactDetails';
import { Container, Row, Col, Form } from 'reactstrap';

class SalesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h2>Enter new sale order</h2>
        <Form>
          <Row>
            <Col>
              <OrderDetails />
            </Col>
            <Col>
              <ContactDetails />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default SalesForm;