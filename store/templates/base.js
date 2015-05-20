import assign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

export default assign({}, EventEmitter.prototype, {
  // Allow Controller-View to register itself with store
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
});
