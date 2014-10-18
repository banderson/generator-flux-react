/*** @jsx React.DOM */

var React = require('react');
var DataStore = require('../stores/DataStore');

var App = React.createClass({

  _onChange: function() {
    this.setState(DataStore.getAll());
  },

  getInitialState: function() {
    return DataStore.getAll();
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <h1>Hello, Flux!</h1>
    );
  }

});

module.exports = App;
