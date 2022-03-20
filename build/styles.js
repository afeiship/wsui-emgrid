(function () {
  'use strict';

  var gulp = require('gulp');
  var autoprefixer = require('autoprefixer');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles:css', function () {
    return gulp
      .src('src/*.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sass())
      .pipe($.postcss([autoprefixer()]))
      .pipe($.rename('style.css'))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('styles:sass', function () {
    return gulp.src('src/**/*.scss').pipe(gulp.dest('dist'));
  });

  gulp.task('styles', gulp.parallel(['styles:sass', 'styles:css']));
})();
