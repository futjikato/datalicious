import React from 'react';
import { FilterContext } from '../context';
import FilterController from '../Controller/FilterController';

export const withFilter = ListComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.controller = new FilterController(props.data);
      this.controller.on('update', items => this.setState({items}));
      this.state = {
        items: props.data
      };
    }

    render() {
      return (
        <FilterContext.Provider value={{ items: this.state.items, controller: this.controller}}>
          <ListComponent filter={this.controller} {...Object.assign({}, this.props,  {data: this.state.items})} />
        </FilterContext.Provider>
      );
    }
  }
}