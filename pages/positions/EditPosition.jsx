import React from 'react';
import {MainLayout} from 'components/layouts';
import {toastr} from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

class EditPosition extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  cb(response) {
    // Back to categories list
    toastr.success('Thành công!', 'Danh mục đã được cập nhật thành công.');

    this.props.history.push('/categories');
  }

  render() {
    return (
      <MainLayout>
        <div>
          Edit Position
        </div>
      </MainLayout>
    );
  }
}

export default withRouter(EditPosition);
