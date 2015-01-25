var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var TaskList = require('./TaskList.jsx');

var App = React.createClass({

  getInitialState: function() {
    var data = DataStore.getAll();
    return {
      tasks: []
    }
  },

  _onChange: function() {
    this.setState(DataStore.getAll());
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick: function(e) {
    var title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick: function(e) {
    ActionCreator.clearList();
  },

  render: function() {
    return (
      <div>
        <h1>Learn Flux</h1>

        <TaskList tasks={this.state.tasks} />

        <button onClick={this.handleAddNewClick}>Add New</button>
        <button onClick={this.handleClearListClick}>Clear List</button>
      </div>
    );
  }

});

module.exports = App;
