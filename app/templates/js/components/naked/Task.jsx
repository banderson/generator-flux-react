var React = require('react');
var ActionCreator = require('../actions/DataActionCreators');

var Task = React.createClass({
  getDefaultProps: function() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle: function(task) {
    if (this.refs.checkbox.getDOMNode().checked) {
      ActionCreator.completeTask(task);
    }
  },

  render: function() {
    var task = this.props.task;
    return (
      <li className="task">
        <input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)} />
        <label>{task.title}</label>
      </li>
    );
  }
});

module.exports = Task;
