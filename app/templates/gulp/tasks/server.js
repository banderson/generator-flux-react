var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    host: 'localhost',
    port: 8080,
    livereload: {
      port: 35929
    }
  });
});
