var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

gulp.task('templates', function () {
  return gulp.src('templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['templates', 'styles']);

gulp.task('default', ['build'], function () {
  gulp.watch(
    ['styles/*.scss', 'templates/*.jade'],
    ['build']
  );
});

gulp.task('watch', function() {
  gulp.watch(['styles/*.scss', 'templates/*.jade'], ['build']);
});

gulp.task('serve', ['watch'], serve({
  root: ['dist'],
  port: 3000
}));
