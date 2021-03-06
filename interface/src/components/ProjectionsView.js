import React, { Component } from 'react';
import * as api from '../api';
import { Table, Container } from 'reactstrap';
import Link from 'react-router-dom/Link';

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
      <Container className="py-5 fade">
        <h1>Projections</h1>
        <Table className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Sales Head</th>
              <th colspan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projections.map((projection, index) => (
              <tr key={projection.id}>
                <td>{index + 1}</td>
                <td>{projection.projectionStart}</td>
                <td>{projection.projectionEnd}</td>
                <td>{projection.salesHead}</td>
                <td>
                  <Link to={`/projections/${projection.id}`}>View</Link>
                </td>
                <td>
                  <Link to={`/analysis/${projection.id}`}>Analyze</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ProjectionsView;
