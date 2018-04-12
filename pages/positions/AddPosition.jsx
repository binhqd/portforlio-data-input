import React from 'react';
import {MainLayout} from 'components/layouts';
import {CategoryForm} from 'components/category';
import {Categories} from 'base/api';
import {toastr} from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

import Form from 'react-jsonschema-form';

const schema = {
  title: 'Add new position',
  type: 'object',
  required: ['title'],
  properties: {
    title: {type: 'string', title: 'Position Title', default: ''},
    company: {type: 'string', title: 'Company', default: ''},
    from: {type: 'string', title: 'From:', default: '', 'ui:widget': 'date'},
    to: {type: 'string', title: 'To', default: '', 'ui:widget': 'date'},
    description: {type: 'string', title: 'Description', default: '', 'ui:widget': 'date'},
    location: {type: 'string', title: 'Location', default: ''}
  }
};

const log = (type) => console.log.bind(console, type);

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
          <h2>Add new position</h2>
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

export default withRouter(AddPosition);
