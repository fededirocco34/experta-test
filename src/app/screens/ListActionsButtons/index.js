import React from 'react';
import { CreateButton, ExportButton } from 'react-admin';

function ListActionsButtons({ basePath, data }) {
  return (
    <div>
      <CreateButton basePath={basePath} record={data} />
      <ExportButton />
    </div>
  );
}

export default ListActionsButtons;
