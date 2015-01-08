'use strict';
var NamedBase = require('yeoman-generator').generators.NamedBase;

var ComponentGenerator = module.exports = NamedBase.extend({
  constructor: function() {
    NamedBase.apply(this, arguments);
  },

  writing: function() {
    this.template('component.jsx', 'src/js/components/' + this.name + '.jsx');
  }
});
