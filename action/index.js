'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FluxGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the Flux Action subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.template('action.js', 'src/js/actions/'+ this.name +'.js');
  }
});

module.exports = FluxGenerator;
