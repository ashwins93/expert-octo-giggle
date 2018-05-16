import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Col,
  Input,
  CustomInput,
  Label,
  Button
} from 'reactstrap';
import { fetchAllSalesHead, fetchOptions } from '../api';

class ProjectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectionStart: '',
      projectionEnd: '',
      salesHead: '',
      category: '',
      amount: '',
      salesHeadOptions: [],
      categoryOptions: []
    };
  }

  componentDidMount() {
    fetchAllSalesHead().then(salesHeadOptions =>
      this.setState({
        salesHeadOptions
      })
    );
    fetchOptions('categories').then(categoryOptions =>
      this.setState({
        categoryOptions
      })
    );
  }

  handleChange = name => ({ target }) => this.setState({ name: target.value });

  render() {
    return (
      <Container className="py-4">
        <h1>New Projection</h1>
        <Form>
          <FormGroup row>
            <Label sm={3}>Start Date</Label>
            <Col sm={3}>
              <Input
                value={this.state.projectionStart}
                onChange={this.handleChange('projectionStart')}
                type="date"
              />
            </Col>
            <Label sm={3}>End Date</Label>
            <Col sm={3}>
              <Input
                value={this.state.projectionEnd}
                onChange={this.handleChange('projectionEnd')}
                type="date"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Sales Head</Label>
            <Col sm={3}>
              <CustomInput
                value={this.state.salesHead}
                onChange={this.handleChange('salesHead')}
                type="select"
              >
                <option value="">Select</option>
                {this.state.salesHeadOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </CustomInput>
            </Col>
            <Label sm={3}>Invoice Category</Label>
            <Col sm={3}>
              <CustomInput
                value={this.state.category}
                onChange={this.handleChange('category')}
                type="select"
              >
                <option value="">Select</option>
                {this.state.categoryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </CustomInput>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Projection Amount</Label>
            <Col sm={3}>
              <Input
                value={this.state.amount}
                onChange={this.handleChange('amount')}
                type="text"
                className="text-right"
              />
            </Col>
          </FormGroup>
          <Button className="mr-2" size="lg" color="primary">
            Submit
          </Button>
          <Button type="button" size="lg">
            Cancel
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ProjectionForm;
