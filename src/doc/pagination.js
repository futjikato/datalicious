import React from 'react';
import { withPagination, asPager } from "../lib";
import PrismCode from 'react-prism';

const Listing = withPagination((props) => (
  <div>
    <div>
      {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
    </div>
    <Pagination />
  </div>
));

const Pagination = asPager(props => (
  <nav>
    <ul style={{listStyle: 'none', padding: 0, display: 'flex'}}>
      {props.pages.map(p => (
        <li key={p} style={{padding: '0 5px'}}><button onClick={(e) => {
          e.preventDefault();
          props.toPage(p);
        }}>{p}</button></li>
      ))}
    </ul>
  </nav>
));

const Item = props => (
  <p>{props.data.name} is {props.data.age} years old</p>
);

export const PaginationDoc = () => (
  <div>
    <header>
      <h3>Pagination</h3>
    </header>
    <div>
      <h4>Demo</h4>
      <Listing perPage={2} data={[
          {'name': 'John Doe', 'age': 35},
          {'name': 'Jane Doe', 'age': 33},
          {'name': 'Brian Doe', 'age': 36},
          {'name': 'Zoey Doe', 'age': 34},
        ]} />
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">
        {`
const Listing = withPagination((props) => (
  <div>
    <div>
      {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
    </div>
    <Pagination />
  </div>
));

const Pagination = asPager(props => (
  <nav>
    <ul style={{listStyle: 'none', padding: 0, display: 'flex'}}>
      {props.pages.map(p => (
        <li style={{padding: '0 5px'}}><a href="#" onClick={(e) => {
          e.preventDefault();
          props.toPage(p);
        }}>{p}</a></li>
      ))}
    </ul>
  </nav>
));

const Item = props => (
  <p>{props.data.name} is {props.data.age} years old</p>
);

const App = () => (
  <Listing data={[
    {'name': 'John Doe', 'age': 35},
    {'name': 'Jane Doe', 'age': 33},
    {'name': 'Brian Doe', 'age': 36},
    {'name': 'Zoey Doe', 'age': 34},
  ]} />
);
        `}
      </PrismCode>
    </div>
  </div>
);