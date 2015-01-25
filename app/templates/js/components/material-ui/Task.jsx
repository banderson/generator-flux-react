var React = require('react');
var ActionCreator = require('../actions/DataActionCreators');
var mui = require('material-ui'),
    Checkbox = mui.Checkbox;

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
      <label>
        <Checkbox name="checkboxName" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)} value="on" />
        <span className="checkbox-label">{task.title}</span>
      </label>
    );
  }
});

module.exports = Task;
