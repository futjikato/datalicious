import React from 'react';
import PrismCode from 'react-prism';
import { Table, RowHeader, asSorter } from '../lib';

const CustomHeader = (props) => (
  <>
    <RowHeader {...props} className="row-header">
      <span>{props.children}</span>
    </RowHeader>
    <style jsx>{`
      .row-header span {
        padding-right: 15px;
        position: relative;
      }
      .row-header span:after {
        content: '';
        position: absolute;
        right: 0;
      }
      .row-header.asc span:after {
        content: '↓';
      }
      .row-header.desc span:after {
        content: '↑';
      }
    `}</style>
  </>
);

const MyHeader = asSorter(props => {
  const cmp = (a,b) => a[props.field] === b[props.field] ? 0 : (a[props.field] > b[props.field] ? -1 : 1);
  return <th onClick={() => props.setSorter(cmp, props.field)}>{props.field}</th>
});

export const TableDoc = () => (
  <div>
    <header>
      <h3>Table</h3>
      <p>The Table component features sorting</p>
    </header>
    <div>
      <h4>Demo</h4>
      <div className="demo-container">
        <Table data={[
          {name: 'John Doe', age: 35, job: 'Accounting'},
          {name: 'Jane Doe', age: 33, job: 'Development'},
          {name: 'Brian Doe', age: 36, job: 'HR'},
          {name: 'Zoey Doe', age: 30, job: 'Accounting'}
        ]} />
      </div>
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">{`
<Table data={[
  {name: 'John Doe', age: 35},
  {name: 'Jane Doe', age: 33},
  {name: 'Brian Doe', age: 36}
]} />
      `}</PrismCode>
    </div>
    <div>
      <h4>Demo with wrapped header components</h4>
      <p>You can customize the table header row by wrapping the original</p>
      <div className="demo-container">
        <Table headerComponent={CustomHeader} data={[
          {name: 'John Doe', age: 35, job: 'Accounting'},
          {name: 'Jane Doe', age: 33, job: 'Development'},
          {name: 'Brian Doe', age: 36, job: 'HR'},
          {name: 'Zoey Doe', age: 30, job: 'Accounting'}
        ]} />
      </div>
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">{`
const CustomHeader = (props) => (
  <>
    <RowHeader {...props} className="row-header">
      <span>{props.children}</span>
    </RowHeader>
    <style jsx>{\`
      .row-header span {
        padding-right: 15px;
        position: relative;
      }
      .row-header span:after {
        content: '';
        position: absolute;
        right: 0;
      }
      .row-header.asc span:after {
        content: '↓';
      }
      .row-header.desc span:after {
        content: '↑';
      }
    \`}</style>
  </>
)

<Table headerComponent={CustomHeader} data={[
  {name: 'John Doe', age: 35, job: 'Accounting'},
  {name: 'Jane Doe', age: 33, job: 'Development'},
  {name: 'Brian Doe', age: 36, job: 'HR'},
  {name: 'Zoey Doe', age: 30, job: 'Accounting'}
]} />
      `}</PrismCode>
    </div>
    <div>
      <h4>Demo with custom header</h4>
      <p>You can also provide your own header component as well as custom data rows</p>
      <div className="demo-container">
        <Table headerComponent={MyHeader} data={[
          {name: 'John Doe', age: 35, job: 'Accounting'},
          {name: 'Jane Doe', age: 33, job: 'Development'},
          {name: 'Brian Doe', age: 36, job: 'HR'},
          {name: 'Zoey Doe', age: 30, job: 'Accounting'}
        ]} />
      </div>
    </div>
    <div>
      <h4>Code</h4>
      <PrismCode component="pre" className="language-js">{`
const MyHeader = asSorter(props => {
  const cmp = (a,b) => a[props.field] === b[props.field] ? 0 : (a[props.field] > b[props.field] ? -1 : 1);
  return <th onClick={() => props.setSorter(cmp, props.field)}>{props.field}</th>
});

<Table headerComponent={MyHeader} data={[
  {name: 'John Doe', age: 35, job: 'Accounting'},
  {name: 'Jane Doe', age: 33, job: 'Development'},
  {name: 'Brian Doe', age: 36, job: 'HR'},
  {name: 'Zoey Doe', age: 30, job: 'Accounting'}
]} />
      `}</PrismCode>
    </div>
    <div>
      <h4>Properties</h4>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>Array of objects</td>
            <td><span role="img" aria-label="Yes">✅</span></td>
            <td>-</td>
            <td />
          </tr>
          <tr>
            <td>tableComponent</td>
            <td>Component to use as table</td>
            <td><span role="img" aria-label="No">❌</span></td>
            <td>table</td>
            <td />
          </tr>
          <tr>
            <td>rowComponent</td>
            <td>Component to use as table row within the table body</td>
            <td><span role="img" aria-label="No">❌</span></td>
            <td>Row</td>
            <td>
              The default row will make a TD for every property in the data set. 
              If you have nestedt objects you might want to build a custom row component.
            </td>
          </tr>
          <tr>
            <td>headerComponent</td>
            <td>Component to use as header columns</td>
            <td><span role="img" aria-label="No">❌</span></td>
            <td>RowHeader</td>
            <td>
              Default is a TH tag. It provides ASC/DESC sorting on click.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);