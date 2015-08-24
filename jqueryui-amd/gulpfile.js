// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
//Required to check the quality of our JavaScript source files using jshint
var jshint = require('gulp-jshint');
//Required to only pass through changed files
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlSrc = './src/*.html',
  htmlDst = './build',
  theme = 'smoothness';
 
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
    .pipe(concat('app.js'))
//    .pipe(stripDebug())
//    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

// Copy styles
gulp.task('copyStyles', function() {
  gulp.src(['./bower_components/jquery-ui/themes/' + theme + '/jquery-ui.css'])
    .pipe(gulp.dest('./build/css/thirdparty/'));
});

// Copy images
gulp.task('copyImages', function() {
  gulp.src(['./bower_components/jquery-ui/themes/' + theme + '/images/*'])
    .pipe(gulp.dest('./build/css/thirdparty/images/'));
});


// JS concat, strip debugging and minify
gulp.task('copyScripts', function() {
  gulp.src(['./bower_components/jquery-ui/jquery-ui.js', './bower_components/jquery/dist/jquery.js',
       './bower_components/requirejs/require.js'])
    .pipe(gulp.dest('./build/scripts/thirdparty/'));
});

// default gulp task
gulp.task('default', ['jshint', 'htmlpage', 'scripts', 'copyScripts','copyStyles', 'copyImages'], function() {
});