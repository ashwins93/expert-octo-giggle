import React, { Fragment } from 'react';
import { FormGroup, CustomInput, Input, Col, Row, Button, Label } from 'reactstrap';

const ItemList = ({ items }) => (
  <Fragment>
    <h3>Items</h3>
    <Row className="my-3">
      <Col sm={5}>Name of the item</Col>
      <Col sm={2}>Quantity</Col>
      <Col sm={2}>Rate</Col>
      <Col sm={2}>Total</Col>
    </Row>
    {items.map(item => (
      <FormGroup row>
        <Col sm={5}>
          <CustomInput type="select" value={item.name}>
            <option>{item.name}</option>
            <option>Random</option>
          </CustomInput>
        </Col>
        <Col sm={2}>
          <Input className="text-right" type="number" value={item.quantity} />
        </Col>
        <Col sm={2}>
          <Input className="text-right" type="text" value={item.rate} />
        </Col>
        <Col sm={2}>
          <input type="text" className="text-right form-control-plaintext" readOnly value={item.quantity * item.rate} />
        </Col>
        <Col>
          <Button type="button" outline size="sm">x</Button>
        </Col>
      </FormGroup>
    ))}
    <Row className="font-weight-bold">
      <Col sm={3}>
        <Button type="button" outline >Add New Line</Button>
      </Col>
      <Col sm={{ size: 2, offset: 4 }}>
        Grand Total
      </Col>
      <Col className="text-right px-3" sm={2}>
        {items.reduce((acc, next) => acc + (next.quantity * next.rate), 0)}
      </Col>
    </Row>
  </Fragment>
);

export default ItemList;
