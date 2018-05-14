import React from 'react';
import { FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';

const OrderDetails = () => (
  <div className="my-2">
    <h4>Order details</h4>
    <FormGroup row>
      <Label sm={6}>Order Received On</Label>
      <Col sm={6}>
        <Input type="date" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>Order Received through</Label>
      <Col sm={6}>
        <CustomInput type="select">
          <option value="phone_call">Phone call</option>
          <option value="message">Message</option>
          <option value="email">Email</option>
        </CustomInput>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>Original order copy received on</Label>
      <Col sm={6}>
        <Input type="date" />
      </Col>
    </FormGroup>
  </div>
);

export default OrderDetails;
