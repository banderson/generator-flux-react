const React = require('react');
const Task = require('./Task.jsx');
const ListGroup = require('react-bootstrap/lib/ListGroup');
const Alert = require('react-bootstrap/lib/Alert');

let TaskList = React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  render() {
    let {tasks} = this.props;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {tasks.map(task =>
            <Task task={task} />
          )}
        </ListGroup>
      </form>
    );
  }
});

module.exports = TaskList;
