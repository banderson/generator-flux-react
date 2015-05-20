import {Dispatcher} from 'flux';
import Constants from '../AppConstants';
import assign from 'object-assign';

export default assign(new Dispatcher(), {
  handleServerAction(action) {
    let payload = {
      source: Constants.ActionSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction(action) {
    let payload = {
      source: Constants.ActionSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});
