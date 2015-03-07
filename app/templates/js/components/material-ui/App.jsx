const React = require('react');
const <%= defaultStore %> = require('../stores/<%= defaultStore %>');
const ActionCreator = require('../actions/<%= defaultActionCreator %>');
const TaskList = require('./TaskList.jsx');
const mui = require('material-ui');

let {RaisedButton} = mui;

let App = React.createClass({

  getInitialState() {
    return {
      tasks: []
    }
  },

  _onChange() {
    this.setState(<%= defaultStore %>.getAll());
  },

  componentDidMount() {
    <%= defaultStore %>.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    <%= defaultStore %>.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    let {tasks} = this.state;
    return (
      <div className="example-page">
        <h1>Learning Flux</h1>
        <p>
          Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
          Most features are left unimplemented with clues to guide you on the learning process.
        </p>

        <TaskList tasks={tasks} />

        <RaisedButton label="Add Task" primary={true} onClick={this.handleAddNewClick} />
        <RaisedButton label="Clear List" secondary={true} onClick={this.handleClearListClick} />
      </div>
    );
  }

});

module.exports = App;
