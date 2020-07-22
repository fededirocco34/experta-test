import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import BulkActionsButtons from '../../../screens/BulkActionsButtons';
import ListActionsButtons from '../../../screens/ListActionsButtons';

import { PROVIDER_FIELDS } from '../constants';


function ProviderList({ ...props }) {
  return (
    <List {...props} actions={<ListActionsButtons />} bulkActionButtons={<BulkActionsButtons />}>
      <Datagrid rowClick="show">
        <TextField source={PROVIDER_FIELDS.name} />
        <TextField source={PROVIDER_FIELDS.cuit} />
      </Datagrid>
    </List>
  );
}

export default ProviderList;
