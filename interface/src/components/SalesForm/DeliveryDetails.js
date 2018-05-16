import React from 'react';
import { FormGroup, Input, Label, Col, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { getDeliveryDetail } from '../../reducers';
import { deliveryDetailChange } from '../../actions';

const DeliveryDetails = ({
  supply,
  invoiced,
  pending,
  invoiceNo,
  dispatchDate,
  courier,
  podNo,
  deliveryDate,
  pendingPayments,
  remarks,
  deliveryDetailChange
}) => (
  <React.Fragment>
    <h3>Delivery Information</h3>
    <FormGroup className="mt-3" row>
      <Label sm={3}>Supply</Label>
      <Col sm={3}>
        <Input
          id="supply"
          value={supply}
          onChange={e => deliveryDetailChange('supply', e.target.value)}
        />
      </Col>
      <Label sm={3}>Order Status</Label>
      <Col sm={3}>
        <CustomInput
          type="radio"
          id="invoiced"
          name="status"
          label="Invoiced"
          inline
          checked={invoiced}
          onChange={e => deliveryDetailChange('invoiced', e.target.checked)}
        />
        <CustomInput
          type="radio"
          id="pending"
          name="status"
          label="Pending"
          inline
          checked={!invoiced}
          onChange={e => deliveryDetailChange('invoiced', !e.target.checked)}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Invoice No.</Label>
      <Col sm={3}>
        <Input
          id="invoice-no"
          value={invoiceNo}
          onChange={e => deliveryDetailChange('invoiceNo', e.target.value)}
          disabled={!invoiced}
        />
      </Col>
      <Label sm={3}>Date of dispatch</Label>
      <Col sm={3}>
        <Input
          id="dispatch-date"
          value={dispatchDate}
          onChange={e => deliveryDetailChange('dispatchDate', e.target.value)}
          type="date"
          disabled={!invoiced}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Name of courier</Label>
      <Col sm={3}>
        <Input
          id="courier"
          value={courier}
          onChange={e => deliveryDetailChange('courier', e.target.value)}
          disabled={!invoiced}
        />
      </Col>
      <Label sm={3}>POD No.</Label>
      <Col sm={3}>
        <Input
          id="pod-no"
          value={podNo}
          onChange={e => deliveryDetailChange('podNo', e.target.value)}
          disabled={!invoiced}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Date of Delivery</Label>
      <Col sm={3}>
        <Input
          id="delivery-date"
          value={deliveryDate}
          onChange={e => deliveryDetailChange('deliveryDate', e.target.value)}
          type="date"
          disabled={!invoiced}
        />
      </Col>
      <Label sm={3}>Payments pending</Label>
      <Col sm={3}>
        <Input
          id="pending-payments"
          value={pendingPayments}
          onChange={e =>
            deliveryDetailChange('pendingPayments', e.target.value)
          }
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={3}>Remarks</Label>
      <Col sm={9}>
        <textarea
          value={remarks}
          onChange={e => deliveryDetailChange('remarks', e.target.value)}
          className="form-control"
        />
      </Col>
    </FormGroup>
  </React.Fragment>
);

const mapStateToProps = state => ({
  supply: getDeliveryDetail(state, 'supply'),
  invoiced: getDeliveryDetail(state, 'invoiced'),
  invoiceNo: getDeliveryDetail(state, 'invoiceNo'),
  dispatchDate: getDeliveryDetail(state, 'dispatchDate'),
  courier: getDeliveryDetail(state, 'courier'),
  podNo: getDeliveryDetail(state, 'podNo'),
  deliveryDate: getDeliveryDetail(state, 'deliveryDate'),
  pendingPayments: getDeliveryDetail(state, 'pendingPayments'),
  remarks: getDeliveryDetail(state, 'remarks')
});

export default connect(mapStateToProps, { deliveryDetailChange })(
  DeliveryDetails
);
