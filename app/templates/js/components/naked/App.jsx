import React, {PropTypes} from 'react';
import TaskList from './TaskList.jsx';

export default React.createClass({
  propTypes: {
    tasks: PropTypes.array.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {
    let {onAddTask, onClear, tasks} = this.props;
    return (
      <div>
        <h1>Learn Flux</h1>
        <TaskList tasks={tasks} />
        <button onClick={onAddTask}>Add New</button>
        <button onClick={onClear}>Clear List</button>
      </div>
    );
  }
});
