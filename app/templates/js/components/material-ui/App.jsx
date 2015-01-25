var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var mui = require('material-ui'),
    RaisedButton = mui.RaisedButton;

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
      <div className="example-page">
        <h1>Hello, welcome to {this.state.title}!</h1>
        <RaisedButton label="Update Title" primary={true} onClick={this._onButtonClick} />
      </div>
    );
  }

});

module.exports = App;
