import React from 'react';
import { withSort, asSorter } from '../index';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.initialItems = props.data;
  }

  get tableComponent() {
    if (this.props.tableComponent) {
      return this.props.tableComponent;
    }

    return "table";
  }

  get rowComponent() {
    if (this.props.rowComponent) {
      return this.props.rowComponent;
    }

    return Row;
  }

  get headerComponent() {
    if (this.props.headerComponent) {
      return this.props.headerComponent;
    }

    return RowHeader;
  }

  get headers() {
    if (this.props.headers) {
      return this.props.headers;
    }

    if (this.props.data && this.props.data.length > 0) {
      return Object.keys(this.props.data[0]);
    }

    if (this.props.initialItems && this.props.initialItems.length > 0) {
      return Object.keys(this.props.initialItems[0]);
    }

    return [];
  }

  render() {
    const Table = this.tableComponent;
    const RowCmp = this.rowComponent;
    const HeaderCmp = this.headerComponent;
    return (
      <Table>
        <thead>
          <tr>
            {this.headers.map((label , i)=> <HeaderCmp field={label} key={i}>{label}</HeaderCmp>)}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((dataSet , i)=> <RowCmp key={i} data={dataSet} />)}
        </tbody>
      </Table>
    );
  }
}

export default withSort(Table);

export class Row extends React.Component {
  render() {
    return (
      <tr>
        {Object.values(this.props.data).map((v, i) => <td key={i}>{v}</td>)}
      </tr>
    );
  }
}

const diffAsc = (props,a,b) => a[props.field] > b[props.field] ? 1 : -1;
const sameAsc = props => (a,b) => a[props.field] === b[props.field] ? 0 : diffAsc(props,a,b);
const diffDesc = (props,a,b) => a[props.field] > b[props.field] ? -1 : 1;
const sameDesc = props => (a,b) => a[props.field] === b[props.field] ? 0 : diffDesc(props,a,b);
export const RowHeader = asSorter(props => {
  let same = sameAsc(props);
  let label = props.field + '_asc';
  let activeClass = props.className;
  if (props.activeLabel === props.field + '_asc') {
    same = sameDesc(props);
    label = props.field + '_desc';
    activeClass += ' asc';
  } else if (props.activeLabel === props.field + '_desc') {
    activeClass += ' desc';
  }

  return <th className={activeClass} onClick={() => props.setSorter(same, label)}>{props.children}</th>
});