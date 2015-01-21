var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').server;

gulp.task('server', function() {
  connect.server(config.settings);
});
