import React from 'react';
import {MainLayout} from 'components/layouts';
import {CategoryForm} from 'components/category';
import {Categories} from 'base/api';
import {toastr} from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

class AddPosition extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  cb(response) {
    // Back to categories list
    toastr.success('Thành công!', 'Danh mục đã được thêm thành công.');

    this.props.history.push('/categories');
  }

  render() {
    return (
      <MainLayout>
        <div>
          Add new position
        </div>
      </MainLayout>
    );
  }
}

export default withRouter(AddPosition);
