var React = require('react');
var <%= defaultStore %> = require('../stores/<%= defaultStore %>');
var ActionCreator = require('../actions/<%= defaultActionCreator %>');
var Button = require('react-bootstrap/lib/Button');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
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
      <div className="container">
        <Jumbotron>
          <h1>Learning Flux</h1>
          <p>
            Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
            Most features are left unimplemented with clues to guide you on the learning process.
          </p>
        </Jumbotron>

        <TaskList tasks={this.state.tasks} />

        <Button onClick={this.handleAddNewClick} bsStyle="primary">Add New</Button>
        <Button onClick={this.handleClearListClick} bsStyle="danger">Clear List</Button>
      </div>
    );
  }

});

module.exports = App;
