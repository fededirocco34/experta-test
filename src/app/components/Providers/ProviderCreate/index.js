import React from 'react';
import { Create, SimpleForm, TextInput, email, required, number, minValue, maxLength } from 'react-admin';

import { PROVIDER_FIELDS, MAX_LENGTH_CUIT } from '../constants';

const validateEmail = email();

function ProviderCreate({ ...props }) {
  console.log(props.record?.data)
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source={PROVIDER_FIELDS.name} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.cuit} validate={[ required(), maxLength(MAX_LENGTH_CUIT) ]} />
        <TextInput source={PROVIDER_FIELDS.email} validate={[ required(), validateEmail ]} />
        <TextInput source={PROVIDER_FIELDS.address} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.phone} validate={[ required(), number(), minValue(0) ]} />
        <TextInput source={PROVIDER_FIELDS.responsibleType} validate={required()} />
      </SimpleForm>
    </Create>
  );
}

export default ProviderCreate;
