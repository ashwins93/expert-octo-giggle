import React from 'react';
import { FormGroup, Label, Col, CustomInput, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getContactDetail, getOptions } from '../../reducers';
import {
  contactDetailChange,
  fetchOptions,
  fetchSalesHead
} from '../../actions';

const ContactDetails = ({
  salesHead,
  distributor,
  endUser,
  contactDetailChange,
  distOptions,
  endOptions,
  fetchOptions,
  fetchSalesHead
}) => (
  <div className="my-2">
    <h4>Contact details</h4>
    <FormGroup row>
      <Label sm={6}>Sales Head</Label>
      <Col sm={6}>
        <Input id="sales-head" value={salesHead} readOnly />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>Distributor</Label>
      <Col sm={6}>
        <CustomInput
          id="distributor"
          value={distributor}
          onChange={e => {
            contactDetailChange('distributor', e.target.value);
            fetchOptions('endUsers', e.target.value);
            fetchSalesHead(e.target.value);
          }}
          type="select"
        >
          <option>Select</option>
          {distOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </CustomInput>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label sm={6}>End User</Label>
      <Col sm={6}>
        <CustomInput
          id="end-user"
          value={endUser}
          onChange={e => contactDetailChange('endUser', e.target.value)}
          type="select"
        >
          <option>Select</option>
          {endOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </CustomInput>
      </Col>
    </FormGroup>
  </div>
);

const mapStateToProps = state => ({
  salesHead: getContactDetail(state, 'salesHead'),
  distributor: getContactDetail(state, 'distributor'),
  endUser: getContactDetail(state, 'endUser'),
  distOptions: getOptions(state, 'distributors'),
  endOptions: getOptions(state, 'endUsers')
});

export default connect(mapStateToProps, {
  contactDetailChange,
  fetchOptions,
  fetchSalesHead
})(ContactDetails);
