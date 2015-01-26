var React = require('react');
var ActionCreator = require('../actions/ActionCreators');
var Task = require('./Task.jsx');

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      tasks: {}
    };
  },

  render: function() {
    return (
      <ul>
        {Object.keys(this.props.tasks).map(title =>
          <Task task={this.props.tasks[title]} />
        )}
      </ul>
    );
  }
});

module.exports = TaskList;
