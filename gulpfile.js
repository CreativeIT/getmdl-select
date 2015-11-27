'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    sassFiles = ['./src/scss/**/*.scss'],
    uglify = require('gulp-uglifyjs'),
    jsFiles = ['src/js/**/*.js'],
    babel = require('gulp-babel');

gulp.task('sass', function () {
  gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function(path) {
      path.dirname = '';
      path.basename = 'getmdl-select';
      path.extname = '.min.css';
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('js', function() {
  gulp
    .src(jsFiles)
    .pipe(babel())
    .pipe(uglify('getmdl-select.min.js', {
      outSourceMap: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(jsFiles, ['js']);
});

gulp.task('default', ['sass', 'js'], function(){});