var React = require('react');
var ActionCreator = require('../actions/DataActionCreators');
var Task = require('./Task.jsx');
var mui = require('material-ui'),
    Paper = mui.Paper;

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      tasks: []
    };
  },

  render: function() {
    return (
      <form id="task-list">
        {this.props.tasks.map(task =>
          <Task task={task} />
        )}
      </form>
    );
  }
});

module.exports = TaskList;
