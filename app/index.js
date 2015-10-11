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
      type: 'string',
      name: 'appDesc',
      message: 'Describe your application in one sentence:',
      default: '...'
    }, {
      type: 'list',
      name: 'ui',
      message: 'UI Frameworks',
      choices: [{
        value: 'naked',
        name: 'None (Vanilla JS/HTML/CSS)'
      }, {
        value: 'react-bootstrap',
        name:'React Bootstrap'
      }, {
        value: 'material-ui',
        name: 'Material UI (experimental beta)'
      }]
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appSlug = slug(props.appName).toLowerCase();
      this.appDesc = props.appDesc;
      this.uiChoice = props.ui;
      done();
    }.bind(this));

    this.defaultStore = 'TodoStore';
    this.defaultActionCreator = 'TodoActionCreators';
  },

  app: function () {
    this.mkdir('src/js/components');
    this.mkdir('src/js/stores');
    this.mkdir('src/js/actions');
    this.copy('js/index.jsx', 'src/js/index.jsx');
    this.copy('_index.html', 'src/index.html');
    this.copy('js/constants.js', 'src/js/Constants.js');
    this.copy('js/dispatcher.js', 'src/js/Dispatcher.js');
    this.copy('js/components/AppContainer.jsx', 'src/js/components/AppContainer.jsx');

    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.copy('_bower.json', 'bower.json');
  },

  npm: function() {
    this.npmInstall([
      'react@0.13', 'flux', 'object-assign', 'eslint',
      'babel-eslint', 'eslint-plugin-react'
    ], { save: true });
  },

  gulp: function() {
    this.npmInstall(['require-dir', 'vinyl-source-stream', 'browserify', 'watchify', 'gulp-util', 'vinyl-buffer', 'reactify'], { saveDev: true });
    this.copy('gulpfile.js', 'gulpfile.js');
    this.mkdir('gulp');
    this.copy('gulp/config.js', 'gulp/config.js');
    this.mkdir('gulp/tasks');
    this.directory('gulp/tasks', 'gulp/tasks');
  },

  ui: function() {
    switch (this.uiChoice) {
      case 'naked':
        break;
      case 'material-ui':
        this.npmInstall(['material-ui-sass'], { save: true });
      default:
        this.npmInstall([this.uiChoice], { save: true });
        break;
    }
    this.directory('js/components/'+ this.uiChoice, 'src/js/components/');
    this.mkdir('src/styles');
    this.directory('styles/'+ this.uiChoice, 'src/styles/');
  },

  server: function() {
    this.npmInstall(['gulp-connect'], { 'saveDev': true });
  },

  transpilation: function() {
    this.npmInstall(['babelify'], { 'saveDev': true });
  },

  styles: function() {
    this.npmInstall(['gulp-sass'], { 'saveDev': true });
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('eslintrc', '.eslintrc');
    this.composeWith('flux:store', {args: [this.defaultStore]});
    this.composeWith('flux:action', {args: [this.defaultActionCreator]});
  }
});

module.exports = FluxGenerator;
