import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AppConstants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _data = [];

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

// Facebook style store creation.
export default assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ADD_TASK:
        let text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          <%= name %>.emitChange();
        }
        break;

      // add more cases for other actionTypes...
    }
  })
});
