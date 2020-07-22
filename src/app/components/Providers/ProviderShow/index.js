import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, FunctionField } from 'react-admin';

import { PROVIDER_FIELDS } from '../constants';

import ProviderTitle from './components/ProviderTitle';

function ProviderShow({ ...props }) {
  return (
    <Show {...props} title={<ProviderTitle />}>
      <SimpleShowLayout>
        <TextField source={PROVIDER_FIELDS.name} />
        <TextField source={PROVIDER_FIELDS.cuit} />
        <EmailField source={PROVIDER_FIELDS.email} />
        <FunctionField
          source={PROVIDER_FIELDS.address}
          render={({ address }) => `${address.street} ${address.suite}, ${address.city}`}
        />
        <TextField source={PROVIDER_FIELDS.phone} />
        <TextField source={PROVIDER_FIELDS.responsibleType} />
      </SimpleShowLayout>
    </Show>
  );
}

export default ProviderShow;
