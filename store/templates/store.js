var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');
var BaseStore = require('./BaseStore');
var assign = require('object-assign');

// data storage
var _data = [];

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

// Facebook style store creation.
var <%= name %> = assign({}, BaseStore, {

  // public methods used by Controller-View to operate on data
  getAll: function() {
    return {
      tasks: _data
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ADD_TASK:
        var text = action.text.trim();
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

module.exports = <%= name %>;
