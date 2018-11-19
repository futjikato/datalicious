import React from 'react';
import { PagerContext } from '../context';
import PaginationController from './../Controller/PaginationController';

export const withPagination = ListComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      const {
        data,
        perPage
      } = props;

      this.controller = new PaginationController({data, perPage});
      this.controller.on('update', data => this.setState({data}));

      this.state = {
        data: this.controller.getPageItems()
      };
    }

    render() {
      return (
        <PagerContext.Provider value={{controller: this.controller}}>
          <ListComponent {...Object.assign({}, this.props, {data: this.state.data})} />
        </PagerContext.Provider>
      );
    }
  }
}