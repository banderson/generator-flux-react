var React = require('react');
var Store = require('../stores/TodoStore');
var ActionCreator = require('../actions/ActionCreators');
var Button = require('react-bootstrap/Button');
var Jumbotron = require('react-bootstrap/Jumbotron');
var TaskList = require('./TaskList.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      tasks: Store.getAll()
    }
  },

  _onChange: function() {
    this.setState({tasks: Store.getAll()});
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
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
