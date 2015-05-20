import React from 'react';
import <%= defaultStore %> from '../stores/<%= defaultStore %>';
import ActionCreator from '../actions/<%= defaultActionCreator %>';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import TaskList from './TaskList.jsx';

export default React.createClass({
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
      <div className="container">
        <Jumbotron>
          <h1>Learning Flux</h1>
          <p>
            Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
            Most features are left unimplemented with clues to guide you on the learning process.
          </p>
        </Jumbotron>

        <TaskList tasks={tasks} />

        <Button onClick={this.handleAddNewClick} bsStyle="primary">Add New</Button>
        <Button onClick={this.handleClearListClick} bsStyle="danger">Clear List</Button>
      </div>
    );
  }
});
