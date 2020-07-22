import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';

import { PROVIDER_FIELDS } from '../constants';

import ProviderTitle from './components/ProviderTitle';

function ProviderShow({ ...props }) {
  return (
    <Show {...props} title={<ProviderTitle />}>
      <SimpleShowLayout>
        <TextField source={PROVIDER_FIELDS.name} />
        <TextField source={PROVIDER_FIELDS.cuit} />
        <EmailField source={PROVIDER_FIELDS.email} />
        <TextField source={PROVIDER_FIELDS.address} />
        <TextField source={PROVIDER_FIELDS.phone} />
        <TextField source={PROVIDER_FIELDS.responsibleType} />
      </SimpleShowLayout>
    </Show>
  );
}

export default ProviderShow;
