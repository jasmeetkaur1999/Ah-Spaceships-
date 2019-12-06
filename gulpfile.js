const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function styles() {
  return gulp.src('src/css/**/*.css')
  .pipe(autoprefixer())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./dest/css'))
}

function images() {
  return gulp.src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dest/images'))
}

function jsfile() {
  return gulp.src('./src/js/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('main.js'))
  .pipe(uglify('all.min.js'))
  .pipe(gulp.dest('./dest/js'))
}
exports.styles = styles;
exports.images = images;
exports.jsfile = jsfile;