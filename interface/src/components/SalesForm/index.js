import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import ContactDetails from './ContactDetails';
import ItemList from './ItemList';
import DeliveryDetails from './DeliveryDetails';
import {
  Container,
  Row,
  Col,
  Form,
  CustomInput,
  FormGroup,
  Label,
  Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { getCategory, getOptions } from '../../reducers';
import { categoryChange, fetchOptions, clearForm } from '../../actions';
import Link from 'react-router-dom/Link';

class SalesForm extends Component {
  componentDidMount() {
    this.props.fetchOptions('distributors');
    this.props.fetchOptions('categories');
  }

  render() {
    const {
      category,
      categoryChange,
      catOptions,
      fetchOptions,
      clearForm
    } = this.props;
    return (
      <Container className="py-5">
        <h1>Enter new sale order</h1>
        <Form>
          <Row>
            <Col>
              <OrderDetails />
            </Col>
            <Col>
              <ContactDetails />
            </Col>
          </Row>
          <hr />
          <FormGroup row>
            <Label sm={{ size: 3, offset: 6 }}>Category</Label>
            <Col sm={3}>
              <CustomInput
                id="category-select"
                type="select"
                value={category}
                onChange={({ target }) => {
                  categoryChange(target.value);
                  fetchOptions('items', target.value);
                }}
              >
                <option>Select</option>
                {catOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </CustomInput>
            </Col>
          </FormGroup>
          <ItemList />
          <hr />
          <DeliveryDetails />
        </Form>
        <FormGroup className="d-flex justify-content-around">
          <Button color="primary" size="lg">
            Submit
          </Button>
          <Link to="/">
            <Button type="button" size="lg">
              Cancel
            </Button>
          </Link>
          <Button type="button" onClick={clearForm} size="lg">
            Reset
          </Button>
        </FormGroup>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  category: getCategory(state),
  catOptions: getOptions(state, 'categories')
});

export default connect(mapStateToProps, {
  categoryChange,
  fetchOptions,
  clearForm
})(SalesForm);
