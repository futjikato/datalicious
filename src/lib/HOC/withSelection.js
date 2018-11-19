import React from 'react';
import { SelectionContext } from '../context';
import SelectionController from '../Controller/SelectionController';

export const withSelection = ListComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.selection = new SelectionController();
      this.selection.on('selection', items => this.setState({items}));
      this.state = {
        items: []
      };
    }

    render() {
      return (
        <SelectionContext.Provider value={{ items: this.state.items, controller: this.selection}}>
          <ListComponent selection={this.selection} {...this.props} />
        </SelectionContext.Provider>
      );
    }
  }
}