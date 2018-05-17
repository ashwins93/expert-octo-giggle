import React, { Fragment } from 'react';
import { FormGroup, CustomInput, Input, Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem,
  itemQtyChange,
  itemRateChange,
  itemNameChange
} from '../../actions';
import { getAllItems, getOptions } from '../../reducers';

const ItemList = ({
  items,
  addItem,
  removeItem,
  itemQtyChange,
  itemRateChange,
  itemNameChange,
  itemOptions
}) => (
    <Fragment>
      <h3>Items</h3>
      <Row className="my-3">
        <Col sm={5}>Name of the item</Col>
        <Col sm={2}>Quantity</Col>
        <Col sm={2}>Rate</Col>
        <Col sm={2}>Total</Col>
      </Row>
      {items.map(item => (
        <FormGroup key={item.id} row>
          <Col sm={5}>
            <CustomInput
              id={`item-name-${item.id}`}
              type="select"
              value={item.name}
              onChange={({ target }) => itemNameChange(item.id, target.value)}
            >
              <option>Select</option>
              {itemOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </CustomInput>
          </Col>
          <Col sm={2}>
            <Input
              id={`item-qty-${item.id}`}
              className="text-right"
              type="number"
              onChange={({ target }) =>
                itemQtyChange(item.id, parseInt(target.value, 10))
              }
              value={item.quantity}
            />
          </Col>
          <Col sm={2}>
            <Input
              id={`item-rate-${item.id}`}
              className="text-right"
              type="text"
              onChange={({ target }) => itemRateChange(item.id, target.value)}
              value={item.rate}
            />
          </Col>
          <Col sm={2}>
            <input
              type="text"
              className="text-right form-control-plaintext"
              readOnly
              value={item.quantity * parseFloat(item.rate)}
            />
          </Col>
          <Col>
            <Button
              type="button"
              onClick={() => removeItem(item.id)}
              outline
              color="danger"
              size="sm"
            >
              {' - '}
            </Button>
          </Col>
        </FormGroup>
      ))}
      <Row className="font-weight-bold">
        <Col sm={3}>
          <Button type="button" onClick={addItem}>
            Add New Line
        </Button>
        </Col>
        <Col sm={{ size: 2, offset: 4 }}>Grand Total</Col>
        <Col className="text-right px-3" sm={2}>
          {items.reduce((acc, next) => acc + next.quantity * next.rate, 0)}
        </Col>
      </Row>
    </Fragment>
  );

const mapStateToProps = state => ({
  items: getAllItems(state),
  itemOptions: getOptions(state, 'items')
});

export default connect(mapStateToProps, {
  addItem,
  removeItem,
  itemQtyChange,
  itemRateChange,
  itemNameChange
})(ItemList);
