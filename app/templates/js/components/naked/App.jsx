var React = require('react');
var <%= defaultStore %> = require('../stores/<%= defaultStore %>');
var ActionCreator = require('../actions/<%= defaultActionCreator %>');
var TaskList = require('./TaskList.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      tasks: []
    }
  },

  _onChange: function() {
    this.setState(<%= defaultStore %>.getAll());
  },

  componentDidMount: function() {
    <%= defaultStore %>.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    <%= defaultStore %>.removeChangeListener(this._onChange);
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
