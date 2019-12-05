const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

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

exports.styles = styles;
exports.images = images;