var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('build', ['browserify', 'styles', 'html'], function() {
  gulp.src('src/**/*.*').pipe(connect.reload());
});