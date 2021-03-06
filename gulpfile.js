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
  gulp.src('styles/*/**.css')
    .pipe(gulp.dest('dist'));

  return gulp.src('styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('img/*.*')
  .pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['templates', 'styles', 'images']);

gulp.task('default', ['build'], function () {
  gulp.watch(
    ['styles/*.scss', 'templates/*.jade', 'img/*.*'],
    ['build']
  );
});

gulp.task('watch', function() {
  gulp.watch(['styles/*.scss', 'templates/*.jade', 'img/*.*'], ['build']);
});

gulp.task('serve', ['watch'], serve({
  root: ['dist'],
  port: 3000
}));
