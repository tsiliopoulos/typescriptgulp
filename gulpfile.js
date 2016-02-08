var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscProject = tsc.createProject('tsconfig.json');
var connect = require('gulp-connect');

var TypeScriptSources = [
    './Scripts/**/*.ts',
    './typings/**/*.ts'];

var HTMLSources = ['./**/*.html'];

gulp.task('transpile', function () {
    gutil.log("transpiling...");

    var tsResult = gulp.src(TypeScriptSources)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscProject))
        .on('error', gutil.log);

    tsResult.dts.pipe(gulp.dest('./Scripts/'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Scripts/'))
        .on('error', gutil.log)
        .pipe(connect.reload());

});

gulp.task("bower", function(){
   return bower()
    .pipe(gulp.dest(bowerDir)); 
});

gulp.task("html", function(){
   gutil.log("html changed...");
   gulp.src(HTMLSources)
   .pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch(TypeScriptSources, ['transpile']);
    gulp.watch(HTMLSources, ['html']);
});

gulp.task("connect", function () {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task("default", ["transpile", "html", "connect", "watch"]);