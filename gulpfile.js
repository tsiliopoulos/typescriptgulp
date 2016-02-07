var gulp = require('gulp');
var gutil = require('gulp-util');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tscProject = tsc.createProject('tsconfig.json');

gulp.task('transpile', function () {
    gutil.log("transpiling")
    var sourceTSFiles = ['./Scripts/**/*.ts',
        './typings/**/*.ts'];

    var tsResult = gulp.src(sourceTSFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscProject))
        .on('error', gutil.log);

    tsResult.dts.pipe(gulp.dest('./Scripts/'));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Scripts/'))
        .on('error', gutil.log);

});