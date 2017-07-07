var gulp = require('gulp'); 


// Include Our Plugins
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');  //compress js
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('rawcss/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(notify("Sass Compilation Complete"))
        .pipe(gulp.dest('public/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['rawcss/*.scss'], ['sass']);
});


// default task that is run when using gulp with no args
gulp.task(
    'default',
    ['sass'],
    function() {
        return gulp.start('watch');
    }
);