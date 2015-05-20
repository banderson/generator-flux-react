import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../constants/AppConstants';

export default {
  addItem(text) {
    AppDispatcher.handleViewAction({
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
