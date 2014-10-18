var Dispatcher = require('flux').Dispatcher;
var Constants = require('../constants/AppConstants');
var copyProperties = require('react/lib/copyProperties');

var <%= name %> = copyProperties(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: Constants.ActionSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: Constants.ActionSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = <%= name %>;
