import React from 'react';
import { Create, SimpleForm, TextInput, email, required } from 'react-admin';

import { PROVIDER_FIELDS } from '../constants';

const validateEmail = email();

function ProviderCreate({ ...props }) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source={PROVIDER_FIELDS.name} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.cuit} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.email} validate={[ required(), validateEmail ]} />
        <TextInput source={PROVIDER_FIELDS.address} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.phone} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.responsibleType} validate={required()} />
      </SimpleForm>
    </Create>
  );
}

export default ProviderCreate;
