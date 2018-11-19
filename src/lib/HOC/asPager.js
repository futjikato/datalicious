import React from 'react';
import { PagerContext } from '../context';

export const asPager = PaginationComponent => {
  return class extends React.Component {
    render() {
      return (
        <PagerContext.Consumer>
          {({controller}) => (
            <PaginationComponent 
              currentPage={controller.page}
              perPage={controller.perPage}
              maxPage={controller.maxPage}
              pages={controller.getPageNumbers()}
              toPage={controller.setPage.bind(controller)}
              setPerPage={controller.setPerPage.bind(controller)}
              {...this.props} />
          )}
        </PagerContext.Consumer>
      );
    }
  }
}