import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];

// add private functions to modify data
function addItem(title, completed = false) {
  _data = _data.concat({title, completed});
}

// Facebook style store creation.
const <%= name %> = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
    case Constants.ActionTypes.TASK_ADDED:
      const text = action.text.trim();
      // NOTE: if this action needs to wait on another store:
      // Dispatcher.waitFor([OtherStore.dispatchToken]);
      // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
      if (text !== '') {
        addItem(text);
        <%= name %>.emitChange();
      }
      break;

    // add more cases for other actionTypes...

    // no default...
    }
  })
});

export default <%= name %>;
