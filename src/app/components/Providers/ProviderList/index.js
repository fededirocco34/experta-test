import React from 'react';
import { List, Datagrid, TextField, EmailField, FunctionField } from 'react-admin';

import BulkActionsButtons from '../../../screens/BulkActionsButtons';

import { PROVIDER_FIELDS } from './constants';


function ProviderList({ ...props }) {
  return (
    <List {...props} bulkActionButtons={<BulkActionsButtons />}>
      <Datagrid rowClick="show">
        <TextField source={PROVIDER_FIELDS.name} />
        <TextField source={PROVIDER_FIELDS.cuit} />
        <EmailField source={PROVIDER_FIELDS.email} />
        <FunctionField
          source={PROVIDER_FIELDS.address}
          render={({ address }) => `${address.street} ${address.suite}, ${address.city}`}
        />
        <TextField source={PROVIDER_FIELDS.phone} />
        <TextField source={PROVIDER_FIELDS.responsibleType} />
      </Datagrid>
    </List>
  );
}

export default ProviderList;
