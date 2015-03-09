var gulp = require('gulp');

var unitTestFiles = './tests/unit/*.spec.js';
var e2eTestFiles = './tests/e2e/*.spec.js';
var jsFile = './js/**/*.js';

var jshint = require('gulp-jshint');
var karma = require('karma').server;
var shell = require('gulp-shell');
var protractor = require("gulp-protractor").protractor;

gulp.task('test', function (done) {
    process.env.NODEWEBKIT_BIN = __dirname + '/node_modules/.bin/nw';
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('lint', function (done) {
    return gulp.src(jsFile)
        .pipe(jshint());
    //.pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
gulp.task('e2e', function (done) {
    gulp.src([e2eTestFiles])
        .pipe(protractor({
            configFile: "./protractor.conf.js",
            args: []
        }))
        .on('error', function (e) {
            throw e
        })
});

gulp.task('run',function(){
    shell.task(['echo starting nw...','./node_modules/.bin/nw']);
});
gulp.task('default', function () {
    shell.task('nw');
    gulp.watch([unitTestFiles, jsFile], ['test']);
});
