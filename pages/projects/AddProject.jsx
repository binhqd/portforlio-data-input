import React from 'react';
import { MainLayout } from 'components/layouts';
import {toastr} from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';

import Form from 'react-jsonschema-form';

const schema = {
  title: 'Add new project',
  type: 'object',
  required: ['name'],
  properties: {
    name: {type: 'string', title: 'Project name', default: ''},
    description: {type: 'string', title: 'Description', default: '', 'ui:widget': 'textarea'},
    startDate: {type: 'string', title: 'Start Date', default: '', 'ui:widget': 'date'},
    endDate: {type: 'string', title: 'End Date', default: '', 'ui:widget': 'date'},
    url: {type: 'string', title: 'URL', default: '', 'ui:widget': 'date'},
    techstack: {type: 'string', title: 'TechStack Involes', default: ''},
    duration: {type: 'number', title: 'Duration', default: ''},
    market: {type: 'string', title: 'Duration', default: ''}
  }
};

const log = (type) => console.log.bind(console, type);

class AddProject extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <MainLayout>
        <div>
          <h2>Add new project</h2>
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

export default withRouter(AddProject);
