import React from 'react';
import Task from './Task.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;
    return (
      <ul>
        {tasks.map(task =>
          <Task task={task} />
        )}
      </ul>
    );
  }
});
