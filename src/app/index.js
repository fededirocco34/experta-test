import * as React from "react";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";

import { i18nProvider } from '../config/providers/i18nProvider';
import { dataProvider } from '../config/providers/dataProvider';
import { RESOURCES } from '../constants/routes';

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    {RESOURCES.map((resource) => (
      <Resource key={resource.name} {...resource} />
    ))}
  </Admin>
);

export default App;
