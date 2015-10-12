var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var connect = require('gulp-connect');
var config = require('../config').browserify;

var b = browserify(config.src, { cache: {}, packageCache: {}, debug: config.debug });
config.settings.transform.forEach(function(t) {
  b.transform(t);
});
var w = watchify(b);

gulp.task('browserify', bundle);
w.on('update', bundle);

function bundle(){
  return w.bundle()
  // log errors if they happen
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputName))
  .pipe(gulp.dest(config.dest))
  .pipe(connect.reload());
}
