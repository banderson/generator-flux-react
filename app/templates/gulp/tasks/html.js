var gulp = require('gulp');

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});
