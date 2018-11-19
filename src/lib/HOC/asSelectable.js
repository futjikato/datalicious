import React from 'react';
import { SelectionContext } from '../context';

export const asSelectable = (ItemComponent) => {
  return class extends React.Component {
    select(controller, data) {
      return () => controller.toggleSelection(data);
    }

    render() {
      return (
        <SelectionContext.Consumer>
          {({controller}) => (
            <ItemComponent 
              doSelect={this.select(controller, this.props.data)}
              selected={controller.isSelected(this.props.data)}
              {...this.props} />
          )}
        </SelectionContext.Consumer>
      );
    }
  }
}