import React, {PropTypes} from 'react';
import {MainLayout} from 'components/layouts';
import {CategoryList} from 'components/category';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h1>Profile</h1>

        </div>
      </MainLayout>
    );
  }
}

export default Profile;
