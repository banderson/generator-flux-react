var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
    gulp.src('src/js/index.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('index.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['browserify', 'copy']);

gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['build']);
