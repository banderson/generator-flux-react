import React from 'react';
import <%= defaultStore %> from '../stores/<%= defaultStore %>';
import ActionCreator from '../actions/<%= defaultActionCreator %>';
import TaskList from './TaskList.jsx';

export default React.createClass({
  getInitialState() {
    return {
      tasks: []
    };
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
      <div>
        <h1>Learn Flux</h1>

        <TaskList tasks={tasks} />

        <button onClick={this.handleAddNewClick}>Add New</button>
        <button onClick={this.handleClearListClick}>Clear List</button>
      </div>
    );
  }
});
