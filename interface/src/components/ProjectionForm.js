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
      categoryOptions: [],
      categories: [
        {
          id: 0,
          category: '',
          amount: ''
        }
      ]
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

  handleChange = name => ({ target }) =>
    this.setState({ [name]: target.value });
  handleChangeList = (name, id, field) => e => {
    let oldState = this.state[name];
    const newValue = e.target.value;
    let newState = oldState.map(old => {
      if (old.id === id) {
        old[field] = newValue;
      }
      return old;
    });
    this.setState({
      [name]: newState
    });
  };
  addProjection = () => {
    const newId =
      this.state.categories.reduce(
        (maxId, item) => Math.max(maxId, item.id),
        -1
      ) + 1;
    this.setState({
      categories: [
        ...this.state.categories,
        {
          id: newId,
          category: '',
          amount: ''
        }
      ]
    });
  };
  removeProjection = id => {
    this.setState({
      categories: this.state.categories.filter(
        projection => projection.id !== id
      )
    });
  };

  render() {
    return (
      <Container className="py-4 fade">
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
          </FormGroup>
          <hr />
          <h3>Projections</h3>
          {this.state.categories.map((projection, index) => (
            <FormGroup key={index} row>
              <Label sm={2}>Invoice Category</Label>
              <Col sm={3}>
                <CustomInput
                  value={projection.category}
                  onChange={this.handleChangeList(
                    'categories',
                    projection.id,
                    'category'
                  )}
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
              <Label sm={2}>Projection Amount</Label>
              <Col sm={3}>
                <Input
                  value={projection.amount}
                  onChange={this.handleChangeList(
                    'categories',
                    projection.id,
                    'amount'
                  )}
                  type="text"
                  className="text-right"
                />
              </Col>
              <Col>
                <Button
                  onClick={() => this.removeProjection(projection.id)}
                  type="button"
                  color="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </Col>
            </FormGroup>
          ))}
          <Button
            type="button"
            onClick={this.addProjection}
            color="info"
            size="sm"
          >
            Add New Line
          </Button>
          <hr />
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
