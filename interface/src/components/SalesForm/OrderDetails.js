import React from 'react';
import { FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';

const OrderDetails = () => (
  <div className="my-2">
    <h4>Order details</h4>
    <FormGroup row>
      <Label sm={6}>Order Received On</Label>
      <Col sm={6}>
        <Input
          type="date"
        // onChange={handleChange('orderReceivedOn')(() => true)}
        // value={orderReceivedOn}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>Order Received through</Label>
      <Col sm={6}>
        <CustomInput
          type="select"
        // onChange={handleChange('orderReceivedThrough')(() => true)}
        // value={orderReceivedThrough}
        >
          <option value="phone_call">Phone call</option>
          <option value="message">Message</option>
          <option value="email">Email</option>
        </CustomInput>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>Original order copy received on</Label>
      <Col sm={6}>
        <Input
          type="date"
        // handleChange={handleChange('originalOrder')(() => true)}
        // value={originalOrder}
        />
      </Col>
    </FormGroup>
  </div>
);

export default OrderDetails;
