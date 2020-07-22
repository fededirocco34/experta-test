import * as React from "react";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";

import { dataProvider } from '../config/providers/dataProvider';
import { RESOURCES } from '../constants/routes';

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    {RESOURCES.map((resource) => (
      <Resource key={resource.name} {...resource} />
    ))}
  </Admin>
);

export default App;
