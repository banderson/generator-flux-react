var React = require('react');
var ActionCreator = require('../actions/ActionCreators');
var Task = require('./Task.jsx');
var mui = require('material-ui'),
    Paper = mui.Paper;

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      tasks: {}
    };
  },

  render: function() {
    return (
      <form id="task-list">
        {Object.keys(this.props.tasks).map(title =>
          <Task task={this.props.tasks[title]} />
        )}
      </form>
    );
  }
});

module.exports = TaskList;
