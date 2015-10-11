import React from 'react';
import Task from './Task.jsx';
import {Paper} from 'material-ui';

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;
    return (
      <form id="task-list">
        {tasks.map(task =>
          <Task task={task} key={task.title} />
        )}
      </form>
    );
  }
});
