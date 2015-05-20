import React from 'react';
import ActionCreator from '../actions/<%= defaultActionCreator %>';
import {Checkbox} from 'material-ui';

export default React.createClass({
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
