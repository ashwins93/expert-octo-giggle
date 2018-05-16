import React, { Component } from 'react';
import * as api from '../api';
import { Table, Container } from 'reactstrap';

class ProjectionsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projections: []
    };
  }

  componentDidMount() {
    api.fetchAllProjections().then(projections =>
      this.setState({
        projections
      })
    );
  }

  render() {
    return (
      <Container className="py-5">
        <h1>Projections</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Sales Head</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projections.map((projection, index) => (
              <tr key={projection.id}>
                <td>{index + 1}</td>
                <td>{projection.projectionStart}</td>
                <td>{projection.projectionEnd}</td>
                <td>{projection.salesHead}</td>
                <td>{projection.category}</td>
                <td>{projection.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ProjectionsView;
