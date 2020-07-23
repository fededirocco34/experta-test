import React from 'react';

const ProviderTitle = ({ record }) => (
  <span>{record ? `Proveedor ${record.name}` : ''}</span>
);

export default ProviderTitle;
