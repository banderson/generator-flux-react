var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  addItem: function(text) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TASK,
      text: text
    });
  },

  clearList: function() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask: function(task) {
    console.warn('completeTask action not yet implemented...');
  }

};
