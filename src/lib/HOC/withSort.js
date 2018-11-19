import React from 'react';
import { SortContext } from '../context';
import SortController from '../Controller/SortController';

export const withSort = ListComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.controller = new SortController(props.data);
      this.controller.on('update', ({items, label}) => {
        this.setState({items, label});
      });
      this.state = {
        sorted: props.data,
        label: '',
      };
    }

    render() {
      return (
        <SortContext.Provider value={{controller: this.controller, label: this.state.label}}>
          <ListComponent {...Object.assign({}, this.props, {data: this.state.sorted})} />
        </SortContext.Provider>
      );
    }
  }
}