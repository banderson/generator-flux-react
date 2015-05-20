import keyMirror from 'react/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    ADD_TASK: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
