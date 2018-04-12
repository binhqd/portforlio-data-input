import React from 'react';
import {MainLayout} from 'components/layouts';
import {CategoryForm} from 'components/category';
import {Categories} from 'base/api';
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

class AddSkill extends React.Component {
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
          <h2>Add new skill</h2>
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

export default withRouter(AddSkill);
