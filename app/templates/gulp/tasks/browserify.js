var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var browserifyTask = function() {
  gulp.src('src/js/index.jsx')
    .pipe(browserify({
      transform: ['reactify', '6to5ify']
    }))
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
};

gulp.task('browserify', browserifyTask);

module.exports = browserifyTask;
