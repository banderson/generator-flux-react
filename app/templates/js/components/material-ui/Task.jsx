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
    if (this.refs.checkbox.isChecked()) {
      ActionCreator.completeTask(task);
    }
  },

  render() {
    let {task} = this.props;
    return (
      <Checkbox name="checkboxName" ref="checkbox" defaultChecked={task.completed}
        onCheck={this.handleToggle.bind(this, task)} value="on" label={task.title} />
    );
  }
});
