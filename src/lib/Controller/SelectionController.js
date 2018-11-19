const EventEmitter = require('events').EventEmitter;
const hash = require('object-hash');

class SelectionController extends EventEmitter {
  constructor() {
    super();
    this.selectedKeys = {};
  }
  
  toggleSelection(data) {
    const key = hash(data);
    if (this.selectedKeys.hasOwnProperty(key)) {
      delete this.selectedKeys[key];
    } else {
      this.selectedKeys[key] = data;
    }
    this.emit('selection', this.getSelection());
  }

  unSelect(data) {
    const key = hash(data);
    if (this.selectedKeys.hasOwnProperty(key)) {
      delete this.selectedKeys[key];
      this.emit('selection', this.getSelection());
    }
  }

  isSelected(data) {
    const key = hash(data);
    return this.selectedKeys.hasOwnProperty(key)
  }

  getKeys() {
    return Object.keys(this.selectedKeys);
  }

  getSelection(validData) {
    if (!validData) {
      return Object.values(this.selectedKeys);
    }

    const validKeys = validData.map(data => hash(data));
    return Object.keys(this.selectedKeys).filter(key => validKeys.includes(key)).map(key => this.selectedKeys[key]);
  }
}

export default SelectionController;