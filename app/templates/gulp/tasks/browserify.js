var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var config = require('../config').browserify;

var browserifyTask = function() {
  gulp.src(config.src)
    .pipe(browserify(config.settings))
    .pipe(concat(config.outputName))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
