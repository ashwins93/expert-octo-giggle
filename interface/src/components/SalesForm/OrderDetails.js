import React from 'react';
import { FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { getOrderDetail } from '../../reducers';
import { orderDetailChange } from '../../actions';

const OrderDetails = ({
  orderReceivedOn,
  orderReceivedThrough,
  originalOrder,
  orderDetailChange
}) => (
    <div className="my-2">
      <h4>Order details</h4>
      <FormGroup row>
        <Label sm={6}>Order Received On</Label>
        <Col sm={6}>
          <Input
            id="order-received-one"
            type="date"
            onChange={(e) => orderDetailChange('orderReceivedOn', e.target.value)}
            value={orderReceivedOn}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={6}>Order Received through</Label>
        <Col sm={6}>
          <CustomInput
            id="order-received-through"
            type="select"
            onChange={(e) => orderDetailChange('orderReceivedThrough', e.target.value)}
            value={orderReceivedThrough}
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
            id="original-order"
            type="date"
            onChange={(e) => orderDetailChange('originalOrder', e.target.value)}
            value={originalOrder}
          />
        </Col>
      </FormGroup>
    </div>
  );

const mapStateToProps = (state) => ({
  orderReceivedOn: getOrderDetail(state, 'orderReceivedOn'),
  orderReceivedThrough: getOrderDetail(state, 'orderReceivedThrough'),
  originalOrder: getOrderDetail(state, 'originalOrder')
});


export default connect(mapStateToProps, { orderDetailChange })(OrderDetails);
