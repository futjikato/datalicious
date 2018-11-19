const EventEmitter = require('events').EventEmitter;

class PaginationController extends EventEmitter {
  constructor({data, page, perPage}) {
    super();

    this.items = data;
    this.page = page || 1;
    this.perPage = perPage || 20;
    this.maxPage = this.calMax();
  }

  calMax() {
    let max = parseInt(this.items.length / this.perPage);
    if (this.items.length % this.perPage !== 0) {
      max++; 
    }

    return max;
  }

  setPage(page) {
    if (page > this.maxPage) {
      page = this.maxPage;
    }
    if (page === this.page) {
      return;
    }

    this.page = page;
    this.emit('update', this.getPageItems());
  }

  setPerPage(perPage) {
    if (perPage === this.perPage) {
      return;
    }

    this.perPage = perPage;
    this.maxPage = this.calMax();
    if (this.page > this.maxPage) {
      this.page = this.maxPage;
    }
    
    this.emit('update', this.getPageItems());
  }

  getPageItems() {
    return this.items.filter((_, key) => (key < (this.page * this.perPage) && key >= ((this.page - 1) * this.perPage)))
  }

  getPageNumbers() {
    return [...Array(this.maxPage).keys()].map(p => (p+1));
  }
}

export default PaginationController;