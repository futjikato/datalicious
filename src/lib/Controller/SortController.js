const EventEmitter = require('events').EventEmitter;

class SortController extends EventEmitter {
  constructor(items) {
    super();
    this.items = items;
    this.sortFn = null;
  }

  setSortFn(fn, label) {
    this.sortFn = fn;
    this.emit('update', {items: this.sort(this.items), label});
  }

  sort(data) {
    if (!this.sortFn) {
      console.log('no sort fn');
      return data;
    }

    return data.sort(this.sortFn);
  }
}

export default SortController;