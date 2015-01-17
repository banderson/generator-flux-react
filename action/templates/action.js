var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  updateTitle: function(text) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.UPDATE_TITLE,
      text: text
    });
  }

};
