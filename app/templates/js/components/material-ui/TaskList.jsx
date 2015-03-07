const React = require('react');
const Task = require('./Task.jsx');
const mui = require('material-ui'),
    Paper = mui.Paper;

let TaskList = React.createClass({
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
          <Task task={task} />
        )}
      </form>
    );
  }
});

module.exports = TaskList;
