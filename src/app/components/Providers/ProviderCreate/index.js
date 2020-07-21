import React from 'react';
import { Create, SimpleForm, TextInput, email } from 'react-admin';

import { PROVIDER_FIELDS } from '../constants';

const validateEmail = email();

function ProviderCreate({ ...props }) {
  return (
    <Create {...props}>
        <SimpleForm>
        <TextInput source={PROVIDER_FIELDS.name} />
        <TextInput source={PROVIDER_FIELDS.cuit} />
        <TextInput source={PROVIDER_FIELDS.email} validate={validateEmail} />
        <TextInput source={PROVIDER_FIELDS.address} />
        <TextInput source={PROVIDER_FIELDS.phone} />
        <TextInput source={PROVIDER_FIELDS.responsibleType} />
      </SimpleForm>
    </Create>
  );
}

export default ProviderCreate;
