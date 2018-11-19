import React from 'react';
import { withSort, asSorter } from "../lib";
import PrismCode from 'react-prism';

const ageSortFn = (a, b) => a.age > b.age ? 1 : -1;
const AgeSorter = asSorter((props) => {
  return <button onClick={() => props.setSorter(ageSortFn)}>Sort by age</button>
});

const nameSortFn = (a, b) => a.name > b.name ? 1 : -1;
const NameSorter = asSorter((props) => {
  return <button onClick={() => props.setSorter(nameSortFn)}>Sort by name</button>
});

const Listing = withSort((props) => (
  <div>
    <AgeSorter />
    <NameSorter />
    {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
  </div>
));

const Item = props => (
  <p>{props.data.name} is {props.data.age} years old</p>
);

export const SortDoc = () => (
  <div>
    <header>
      <h3>Sort</h3>
    </header>
    <div>
      <h4>Demo</h4>
      <Listing data={[
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
const ageSortFn = (a, b) => a.age > b.age ? 1 : -1;
const AgeSorter = asSorter((props) => {
  return <button onClick={() => props.setSorter(ageSortFn)}>Sort by age</button>
});

const nameSortFn = (a, b) => a.name > b.name ? 1 : -1;
const NameSorter = asSorter((props) => {
  return <button onClick={() => props.setSorter(nameSortFn)}>Sort by name</button>
});

const Listing = withSort((props) => (
  <div>
    <AgeSorter />
    <NameSorter />
    {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
  </div>
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