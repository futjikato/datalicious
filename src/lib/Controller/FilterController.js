const EventEmitter = require('events').EventEmitter;

class FilterController extends EventEmitter {
  constructor(items) {
    super();

    this.active = null;
    this.filtered = items;
    this.items = items;
  }

  setFilter(fn) {
    if (!fn) {
      this.active = null;
      this.filtered = this.items;
      this.emit('update', this.filtered);
      return;
    }

    if (fn !== this.active) {
      this.active = fn;
      this.filter();
    }
  }

  filter() {
    if (this.active) {
      this.filtered = this.items.filter(this.active);
      this.emit('update', this.filtered);
    }
  }

  getFiltered() {
    return this.filtered;
  }
}

export default FilterController; 