var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var Button = require('react-bootstrap/Button');

var App = React.createClass({

  _onChange: function() {
    this.setState(DataStore.getAll());
  },

  _onButtonClick: function(e) {
    var newTitle = prompt('Enter new title:');
    if (newTitle) {
      ActionCreator.updateTitle(newTitle);
    }
  },

  getInitialState: function() {
    var data = DataStore.getAll();
    return {
      title: data.title || "<%= appName %>"
    }
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <h1>Hello, welcome to {this.state.title}!</h1>
        <Button onClick={this._onButtonClick} bsStyle="primary">Update Title</Button>
      </div>
    );
  }

});

module.exports = App;
