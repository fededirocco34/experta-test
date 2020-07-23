import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { connect } from 'react-redux';

import BulkActionsButtons from '../../../screens/BulkActionsButtons';
import ListActionsButtons from '../../../screens/ListActionsButtons';
import { PROVIDER_FIELDS } from '../constants';

function ProviderList({ ...props }) {

  return (
    <List {...props} 
      actions={<ListActionsButtons providers={props.providers} />} 
      bulkActionButtons={<BulkActionsButtons />}
    >
      <Datagrid rowClick="show">
        <TextField source={PROVIDER_FIELDS.name} />
        <TextField source={PROVIDER_FIELDS.cuit} />
      </Datagrid>
    </List>
  );
}

const mapStateToProps = (state, props) => ({
  providers: state.admin.resources.providers.data
});

export default connect(mapStateToProps)(ProviderList);
