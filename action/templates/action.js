var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');
var DataStore = require('../stores/DataStore');

module.exports = {

  updateTitle: function(text) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.UPDATE_TITLE,
      text: text
    });
  }

};
