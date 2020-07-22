import React from 'react';

const ProviderTitle = ({ record }) => (
  <span>{record ? `Usuario: ${record.name}` : ''}</span>
);

export default ProviderTitle;
