import Dispatcher from '../Dispatcher';
import Constants from '../AppConstants';

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TASK,
      text: text
    });
  },

  clearList() {
    console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...');
  }
};
