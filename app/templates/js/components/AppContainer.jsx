import React from 'react';
import <%= defaultStore %> from '../stores/<%= defaultStore %>';
import ActionCreator from '../actions/<%= defaultActionCreator %>';

export default React.createClass({
  _onChange() {
    this.setState(<%= defaultStore %>.getAll());
  },

  getInitialState() {
    return <%= defaultStore %>.getAll();
  },

  componentDidMount() {
    <%= defaultStore %>.addChangeListener(_onChange);
  },

  componentWillUnmount() {
    <%= defaultStore %>.removeChangeListener(_onChange);
  },

  handleAddTask(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClear(e) {
    ActionCreator.clearList();
  },

  render() {
    let {tasks} = this.state;
    return (
      <App
        onAddTask={this.handleAddTask}
        onClear={this.handleClear}
        tasks={tasks} />
    );
  }
});
