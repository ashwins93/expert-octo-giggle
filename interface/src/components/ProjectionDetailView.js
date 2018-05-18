import React from 'react';
import * as api from '../api';
import { Container, Table } from 'reactstrap';

class ProjectionDetailView extends React.Component {
  state = {
    salesHead: '',
    projectionStart: '',
    projectionEnd: '',
    categories: []
  };

  componentDidMount() {
    api.fetchProjection(this.props.match.params.id).then(projection => {
      this.setState(projection);
    });
  }

  render() {
    return (
      <Container className="fade">
        <h1>Projection for {this.state.salesHead}</h1>
        <p>
          {this.state.projectionStart} to {this.state.projectionEnd}
        </p>
        <Table className="mt-3 text-center" style={{ maxWidth: '500px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((projection, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{projection.category}</td>
                <td className="text-right">{projection.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ProjectionDetailView;
