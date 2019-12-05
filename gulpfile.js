const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function styles() {
  return gulp.src('src/css/**/*.css')
  .pipe(autoprefixer())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('./dest/css'))
}

exports.styles = styles;