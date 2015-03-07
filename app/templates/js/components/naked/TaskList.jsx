var React = require('react');
var Task = require('./Task.jsx');

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      tasks: []
    };
  },

  render: function() {
    return (
      <ul>
        {this.props.tasks.map(task =>
          <Task task={task} />
        )}
      </ul>
    );
  }
});

module.exports = TaskList;
