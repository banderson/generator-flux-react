'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var slug = require('slug');


var FluxGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Flux/React generator!'));

    var prompts = [{
      type: 'string',
      name: 'appName',
      message: 'What\'s the name of your application?',
      default: "My Flux App"
    }, {
      type: 'confirm',
      name: 'server',
      message: 'Would you like a generate a static, localhost server?',
      default: true
    }, {
      type: 'string',
      name: 'appSlug',
      message: 'Enter a machine-readable name for your application (for package.json)',
      default: function(answers) {
        return slug(answers.appName).toLowerCase();
      }
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.appName = props.appName;
      this.server = props.server;
      this.appSlug = slug(props.appName).toLowerCase();
      this.appDesc = props.appDesc;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src/js/components');
    this.mkdir('src/js/dispatchers');
    this.mkdir('src/js/stores');
    this.mkdir('src/js/constants');
    this.mkdir('src/js/actions');
    this.copy('js/index.jsx', 'src/js/index.jsx');
    this.copy('_index.html', 'src/index.html');
    this.copy('js/constants.js', 'src/js/constants/AppConstants.js');
    this.copy('js/components/app.jsx', 'src/js/components/App.jsx');

    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.copy('_bower.json', 'bower.json');
    this.copy('gulpfile.js', 'gulpfile.js');
  },

  server: function() {
    if (this.server) {
      this.npmInstall(['connect'], { 'saveDev': true });
      this.npmInstall(['serve-static'], { 'saveDev': true });
      this.copy('server.js', 'server.js');
    }
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('jshintrc', '.jshintrc');
    this.composeWith('flux:dispatcher', {args: ['AppDispatcher']});
    this.composeWith('flux:store', {args: ['DataStore']});
    this.composeWith('flux:action', {args: ['DataActionCreators']});
  }
});

module.exports = FluxGenerator;
