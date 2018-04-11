import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {Link} from 'react-router-dom';

class ListSkills extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h1>List Skills</h1>
        </div>
      </MainLayout>
    );
  }
}

export default ListSkills;
