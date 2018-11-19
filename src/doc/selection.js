import React from 'react';
import { withSelection, asSelectable } from "../lib";
import PrismCode from 'react-prism';

const Listing = withSelection(props => (
  <div>
    {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
    <p>Selected: {props.selection.getSelection().map(data => data.name).join(', ')}</p>
  </div>
));

const Item = asSelectable(props => (
  <p style={{cursor: 'pointer'}}
     onClick={props.doSelect}>
      [{props.selected ? '✅' : '❌'}] {props.data.name} is {props.data.age} years old
  </p>
));

export const SelectionDoc = () => (
  <div>
    <header>
      <h3>Selection</h3>
    </header>
    <div>
      <h4>Demo</h4>
      <Listing data={[{'name': 'John Doe', 'age': 35},{'name': 'Jane Doe', 'age': 36}]} />
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">
        {`
const Listing = withSelection(props => (
  <div>
    {props.data.map(dataSet => <Item key={dataSet.name} data={dataSet} />)}
    <p>Selected: {props.selection.getSelection().map(data => data.name).join(', ')}</p>
  </div>
));

const Item = asSelectable(props => (
  <p style={{cursor: 'pointer'}}
     onClick={props.doSelect}>
      [{props.selected ? '✅' : '❌'}] {props.data.name} is {props.data.age} years old
  </p>
));

const App = () => (
  <Listing data={[{'name': 'John Doe', 'age': 35},{'name': 'John Doe', 'age': 35}]} />
);
        `}
      </PrismCode>
    </div>
  </div>
);