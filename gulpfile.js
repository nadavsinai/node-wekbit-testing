var gulp = require('gulp');
var mocha = require('gulp-mocha');
require('./utils.js').chai();
var testFiles= './tests/unit/*.spec.js';


gulp.task('test', function () {
    return gulp.src(testFiles, {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
gulp.task('default',function(){
    gulp.watch(testFiles, ['test']);
});
