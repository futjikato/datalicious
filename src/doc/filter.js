import React from 'react';
import { withFilter, asFilter } from "../lib";
import PrismCode from 'react-prism';

const filterFn = dataSet => dataSet.age === 35;
const AgeFilter = asFilter((props) => {
  if (props.currentFilter === filterFn) {
    return <button onClick={() => props.setFilter()}>Reset filter</button>
  }
  return <button onClick={() => props.setFilter(filterFn)}>Only age 35</button>
});

const Listing = withFilter((props) => (
  <div>
    <AgeFilter />
    {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
  </div>
));

const Item = props => (
  <p>{props.data.name} is {props.data.age} years old</p>
);

export const FilterDoc = () => (
  <div>
    <header>
      <h3>Filter</h3>
    </header>
    <div>
      <h4>Demo</h4>
      <Listing data={[{'name': 'John Doe', 'age': 35},{'name': 'Jane Doe', 'age': 36}]} />
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">{`
const filterFn = dataSet => dataSet.age === 35;
const AgeFilter = asFilter((props) => {
  if (props.currentFilter === filterFn) {
    return <button onClick={() => props.setFilter()}>Reset filter</button>
  }
  return <button onClick={() => props.setFilter(filterFn)}>Only age 35</button>
});

const Listing = withFilter((props) => (
  <div>
    <AgeFilter />
    {props.filtered.map(dataSet => <Item data={dataSet} />)}
  </div>
));

const Item = props => (
  <p>{props.data.name} is {props.data.age} years old</p>
);

const App = () => (
  <Listing data={[{'name': 'John Doe', 'age': 35},{'name': 'John Doe', 'age': 35}]} />
);
      `}</PrismCode>
    </div>
  </div>
);