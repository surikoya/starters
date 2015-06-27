// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
//Reuired to check the quality of our JavaScript source files using jshint
var jshint = require('gulp-jshint');
//Required to only pass through changed files
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var htmlSrc = './src/*.html',
  htmlDst = './build',
  cssSrc = './src/styles/*';
 
// JS hint task
gulp.task('jshint', function() {
  gulp.src('.src/scripts/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() { 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/app/*.js'])
    .pipe(concat('main.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/app/'));
});

// JS concat, strip debugging and minify
gulp.task('copyStyles', function() {
  gulp.src([cssSrc])
    .pipe(gulp.dest('./build/styles/'));
});

// JS concat, strip debugging and minify
gulp.task('copyScripts', function() {
  gulp.src(['./src/scripts/thirdparty/*.js'])
    .pipe(gulp.dest('./build/scripts/thirdparty/'));
});

// default gulp task
gulp.task('default', ['jshint', 'htmlpage', 'scripts', 'copyScripts','copyStyles'], function() {
});