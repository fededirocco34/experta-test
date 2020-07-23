import * as React from "react";
import { Admin, Resource } from "react-admin";

import { i18nProvider } from '../config/providers/i18nProvider';
import { dataProvider } from '../config/providers/dataProvider';
import { RESOURCES } from '../constants/routes';

import { appTheme } from './syles';

const App = () => (
  <Admin 
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    theme={appTheme}
  >
    {RESOURCES.map((resource) => (
      <Resource key={resource.name} {...resource} />
    ))}
  </Admin>
);

export default App;
