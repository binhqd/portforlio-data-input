import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {Link} from 'react-router-dom';

class ListPositions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h1>List Positions</h1>
        </div>
      </MainLayout>
    );
  }
}

export default ListPositions;
