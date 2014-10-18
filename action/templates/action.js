var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var DataStore = require('../stores/DataStore');

module.exports = {

  createSearch: function(text) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.SEARCH_CLICK,
      text: text
    });
  }

};
