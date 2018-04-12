import React from 'react';
import {MainLayout} from 'components/layouts';
import {toastr} from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

import Form from 'react-jsonschema-form';

const schema = {
  title: 'Add new skill',
  type: 'object',
  required: ['name'],
  properties: {
    name: {type: 'string', title: 'Skill name', default: ''},
    rating: {type: 'number', title: 'Rating (1-5)', default: 0}
  }
};

const log = (type) => console.log.bind(console, type);

class EditSkill extends React.Component {
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
          <h2>Edit Skill</h2>
          <Form
            onChange={log('changed')}
            onError={log('errors')}
            onSubmit={log('submitted')}
            schema={schema}
          />
        </div>
      </MainLayout>
    );
  }
}

export default withRouter(EditSkill);
