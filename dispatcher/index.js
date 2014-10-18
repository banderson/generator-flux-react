'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the Flux Dispatcher subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.template('dispatcher.js', 'src/js/dispatchers/'+ this.name +'.js');
  }
});

module.exports = FluxGenerator;
