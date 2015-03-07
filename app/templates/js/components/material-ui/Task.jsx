const React = require('react');
const ActionCreator = require('../actions/<%= defaultActionCreator %>');
const mui = require('material-ui');

let {Checkbox} = mui;

let Task = React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    if (this.refs.checkbox.getDOMNode().checked) {
      ActionCreator.completeTask(task);
    }
  },

  render() {
    let {task} = this.props;
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
