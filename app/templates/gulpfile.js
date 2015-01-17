var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('browserify', function() {
  gulp.src('src/js/index.jsx')
    .pipe(browserify({
      transform: 'reactify'
    }))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['browserify', 'copy'], function() {
  gulp.src('src/**/*.*').pipe(connect.reload());
});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.*', ['build']);
});

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

gulp.task('default', ['build', 'watch', 'server']);
