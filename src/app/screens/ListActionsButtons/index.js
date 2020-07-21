import React from 'react';
import { CreateButton, ExportButton } from 'react-admin';

import { RESOURCES } from '../../../constants/routes';

function ListActionsButtons(props) {
  return (
    <div>
      <CreateButton basePath={RESOURCES[0].name} />
      <ExportButton />
    </div>
  );
}

export default ListActionsButtons;
