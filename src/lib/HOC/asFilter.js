import React from 'react';
import { FilterContext } from '../context';

export const asFilter = FilterComponent => {
  return class extends React.Component {
    render() {
      return (
        <FilterContext.Consumer>
          {({controller}) => (
            <FilterComponent 
              currentFilter={controller.active}
              setFilter={controller.setFilter.bind(controller)}
              {...this.props} />
          )}
        </FilterContext.Consumer>
      );
    }
  }
}