var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');
var webpack     = require('webpack');
var webpackStream     = require('webpack-stream');
var webpackConfig     = require('./webpack.config.js');
 
gulp.task('compile', function(){
    return gulp.src([
        './src/js/index.js',
        ])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(webpackStream(webpackConfig), null, function(err, stats){
            if(stats.compilation.errors.length > 0){
                notify({
                    title: 'webpack error',
                    message: stats.compilation.errors[0].error
                });
            }
        })
        .pipe(gulp.dest('js'))
});
 
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
 
gulp.task('watch', function () {
  gulp.watch(['src/js/**/**.js'], gulp.task('compile'));
  gulp.watch(['**/*.html', 'js/**/*.js', 'css/**/**.css'], function () {
    browserSync.reload();
    // done();
  });
});
 
gulp.task('default', gulp.parallel('compile','browser-sync','watch'));