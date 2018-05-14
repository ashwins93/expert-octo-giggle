import React, { Fragment } from 'react';
import { FormGroup, CustomInput, Input, Col, Row } from 'reactstrap';

const ItemList = ({ items }) => (
  <Fragment>
    <h3>Items</h3>
    <Row className="p-3 my-3">
      <Col sm={3}>Name of the item</Col>
      <Col sm={3}>Quantity</Col>
      <Col sm={3}>Rate</Col>
      <Col sm={3}>Total</Col>
    </Row>
    {items.map(item => (
      <FormGroup row>
        <Col sm={3}>
          <CustomInput type="select" value={item.name}>
            <option>{item.name}</option>
            <option>Random</option>
          </CustomInput>
        </Col>
        <Col sm={3}>
          <Input className="text-right" type="number" value={item.quantity} />
        </Col>
        <Col sm={3}>
          <Input className="text-right" type="text" value={item.rate} />
        </Col>
        <Col className="text-right" sm={3}>
          {item.quantity * item.rate}
        </Col>
      </FormGroup>
    ))}
  </Fragment>
);

export default ItemList;
