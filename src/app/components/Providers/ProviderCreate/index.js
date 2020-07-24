import React from 'react';
import { Create, SimpleForm, TextInput, email, required, number, minValue, maxLength } from 'react-admin';
import { connect } from 'react-redux';

import { PROVIDER_FIELDS, MAX_LENGTH_CUIT } from '../constants';

const validateEmail = email();

function ProviderCreate({ ...props }) {
  const validateCuit = (value) => {
    let errors = false;
    const providerList = Object.values(props.providers);
    
    providerList.forEach(item => {
      if (item.cuit === value) {
        errors = true;
      }
    });

    return errors ? 'El CUIT ya existe' : undefined;
  };

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source={PROVIDER_FIELDS.name} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.cuit} validate={[ required(), maxLength(MAX_LENGTH_CUIT), validateCuit ]} />
        <TextInput source={PROVIDER_FIELDS.email} validate={[ required(), validateEmail ]} />
        <TextInput source={PROVIDER_FIELDS.address} validate={required()} />
        <TextInput source={PROVIDER_FIELDS.phone} validate={[ required(), number(), minValue(0) ]} />
        <TextInput source={PROVIDER_FIELDS.responsibleType} validate={required()} />
      </SimpleForm>
    </Create>
  );
}

const mapStateToProps = (state, props) => ({
  providers: state.admin.resources.providers.data
});

export default connect(mapStateToProps)(ProviderCreate);
