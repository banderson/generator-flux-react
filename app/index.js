'use strict';
var yeoman = require('yeoman-generator');


var FluxGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
  },

  app: function () {
    this.mkdir('src/js/components');
    this.mkdir('src/js/dispatchers');
    this.mkdir('src/js/stores');
    this.mkdir('src/js/constants');
    this.mkdir('src/js/actions');
    this.copy('js/index.js', 'src/js/index.js');
    this.copy('_index.html', 'src/index.html');
    this.copy('js/components/app.js', 'src/js/components/app.js');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
  },

  end: function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  }
});

module.exports = FluxGenerator;
