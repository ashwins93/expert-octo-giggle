import React from 'react';
import { FormGroup, Input, Label, Col, CustomInput, Row } from 'reactstrap';

const DeliveryDetails = () => (
  <React.Fragment>
    <h3>Delivery Information</h3>
    <FormGroup className="mt-3" row>
      <Label sm={3}>Supply</Label>
      <Col sm={3}>
        <Input />
      </Col>
      <Label sm={3}>Order Status</Label>
      <Col sm={3}>
        <CustomInput type="radio" id="exampleCustomRadio" name="status" label="Invoiced" inline />
        <CustomInput type="radio" id="exampleCustomRadio2" name="status" label="Pending" inline checked />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Invoice No.</Label>
      <Col sm={3}>
        <Input disabled />
      </Col>
      <Label sm={3}>Date of dispatch</Label>
      <Col sm={3}>
        <Input type="date" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Name of courier</Label>
      <Col sm={3}>
        <Input />
      </Col>
      <Label sm={3}>POD No.</Label>
      <Col sm={3}>
        <Input />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Date of Delivery</Label>
      <Col sm={3}>
        <Input type="date" />
      </Col>
      <Label sm={3}>Payments pending</Label>
      <Col sm={3}>
        <Input />
      </Col>
    </FormGroup>
    <Row>
      <Label sm={3}>Remarks</Label>
      <Col sm={9}><textarea className="form-control" /></Col>
    </Row>
  </React.Fragment>
);

export default DeliveryDetails;