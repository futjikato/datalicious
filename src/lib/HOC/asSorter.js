import React from 'react';
import { SortContext } from '../context';

export const asSorter = SorterComponent => {
  return class extends React.Component {
    render() {
      return (
        <SortContext.Consumer>
          {({controller, label}) => (
            <SorterComponent 
              activeLabel={label}
              setSorter={controller.setSortFn.bind(controller)}
              {...this.props} />
          )}
        </SortContext.Consumer>
      );
    }
  }
}