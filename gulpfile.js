(function() {
    'use strict';
    var gulp = require('gulp');
    var browserSync = require('browser-sync').create();
    var path = require('path');
    var karma = require('karma');

    gulp.task('browser-sync', function(cb) {
        browserSync.init({
            server: {
                baseDir: './src',
                files: ['**/*.html', '**/*.js', '**/*.css'],
                port: 8000,
                // Not working for some reason....
                browser: ['internet explorer', 'google chrome'],
                logLevel: 'debug'
            }
        }, cb);
    });

    gulp.task('watch', [
        'browser-sync'
    ], function() {
        gulp.watch('src/**/*.html', function(event) {
            browserSync.reload(path.relative(__dirname, event.path));
        });
        gulp.watch('src/**/*.js', function(event) {
            browserSync.reload(path.relative(__dirname, event.path));
        });
        gulp.watch('src/**/*.css', function(event){
            browserSync.reload(path.relative(__dirname, event.path));
        });
    });

    gulp.task('test', function(cb) {
        new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, cb).start();
    });

    gulp.task('default', [
        'watch'
    ]);

    // Trying out browserify builds + watchify.
    //var watchify = require('watchify');
    //var browserify = require('browserify');

    // TODO: To be continue...
})();