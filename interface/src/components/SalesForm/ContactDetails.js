import React from 'react';
import { FormGroup, Label, Col, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { getContactDetail } from '../../reducers';
import { contactDetailChange } from '../../actions';

const ContactDetails = ({
  salesHead,
  distributor,
  endUser,
  contactDetailChange
}) => (
    <div className="my-2">
      <h4>Contact details</h4>
      <FormGroup row>
        <Label sm={6}>Sales Head</Label>
        <Col sm={6}>
          <CustomInput
            id="sales-head"
            value={salesHead}
            onChange={(e) => contactDetailChange('salesHead', e.target.value)}
            type="select"
          >
            <option value="1">John</option>
            <option value="2">Doe</option>
            <option value="3">Feynman</option>
          </CustomInput>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={6}>Distributor</Label>
        <Col sm={6}>
          <CustomInput
            id="distributor"
            value={distributor}
            onChange={(e) => contactDetailChange('distributor', e.target.value)}
            type="select"
          >
            <option value="1">Avon</option>
            <option value="2">Spock</option>
            <option value="3">Drax</option>
          </CustomInput>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={6}>End User</Label>
        <Col sm={6}>
          <CustomInput
            id="end-user"
            value={endUser}
            onChange={(e) => contactDetailChange('endUser', e.target.value)}
            type="select"
          >
            <option value="1">Drecker</option>
            <option value="2">Beckett</option>
            <option value="3">Karl</option>
          </CustomInput>
        </Col>
      </FormGroup>
    </div >
  );

const mapStateToProps = state => ({
  salesHead: getContactDetail(state, 'salesHead'),
  distributor: getContactDetail(state, 'distributor'),
  endUser: getContactDetail(state, 'endUser')
});

export default connect(mapStateToProps, { contactDetailChange })(ContactDetails);
