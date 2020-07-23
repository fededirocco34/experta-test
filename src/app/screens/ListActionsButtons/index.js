import React from 'react';
import { CreateButton, ExportButton } from 'react-admin';

function ListActionsButtons({ basePath, data }) {
  return (
    <div>
      <CreateButton basePath={basePath} record={data} />
      <ExportButton resource="providers" />
    </div>
  );
}

export default ListActionsButtons;
