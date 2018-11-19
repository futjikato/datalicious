import React from 'react';
import { render } from "react-dom";
import { FilterDoc, SelectionDoc, SortDoc, PaginationDoc, TableDoc } from './doc';

require('prismjs');
require('prismjs/themes/prism.css');

const App = () => (
  <div style={{ maxWidth: 1024, margin: '15px auto' }}>
    <h2>Ready to use components</h2>
    <p>The following components include all features from this lib while beeing configurable to a very high degree.</p>
    <TableDoc />
    <h2 style={{marginTop: '100px'}}>Single purpose wrapper</h2>
    <p>The following examples show how to use single features.</p>
    <FilterDoc />
    <SelectionDoc />
    <SortDoc />
    <PaginationDoc />
  </div>
);

render(<App />, document.getElementById("root"));
