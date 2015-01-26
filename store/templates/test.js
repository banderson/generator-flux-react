// For more detail and background behind this setup, see:
// http://facebook.github.io/react/blog/2014/09/24/testing-flux-applications.html

jest.dontMock('../../constants/AppConstants');
jest.dontMock('react/lib/keyMirror')
jest.dontMock('../<%= name %>');
jest.dontMock('object-assign');

describe('<%= name %>', function() {

  var constants = require('../../constants/AppConstants');

  // mock actions inside dispatch payloads
  var actionTodoCreate = {
    source: 'VIEW_ACTION',
    action: {
      type: constants.ActionTypes.ADD_TASK,
      text: 'title'
    }
  };

  var AppDispatcher;
  var <%= name %>;
  var callback;

  beforeEach(function() {
    AppDispatcher = require('../../dispatchers/AppDispatcher');
    <%= name %> = require('../<%= name %>');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('initializes with no to-do items', function() {
    var all = <%= name %>.getAll();
    expect(all).toEqual({});
  });

  it('creates a to-do item', function() {
    callback(actionTodoCreate);
    var all = <%= name %>.getAll();
    var keys = Object.keys(all);
    expect(keys.length).toBe(1);
    expect(all[keys[0]].title).toEqual('title');
  });

});
