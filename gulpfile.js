(function() {
  'use strict';

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();
  var path = require('path');
  var karma = require('karma');
  var gulpConcat = require('gulp-concat');
  var gulpRename = require('gulp-rename');
  var gulpUglify = require('gulp-uglify');
  var gulpSourcemaps = require('gulp-sourcemaps');



  gulp.task('browser-sync', function(cb) {
    browserSync.init({
      server: {
        baseDir: './src',
        files: ['**/*.html', '**/*.js', '**/*.css'],
        port: 3000,
        logLevel: 'debug'
      }
    }, cb);
  });

  gulp.task('dev', [
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


  gulp.task('build', function(){
    return gulp.src(['src/app.js', 'src/modules/**/*.js'])
      .pipe(gulpSourcemaps.init())
      .pipe(gulpConcat('release.js'))
      .pipe(gulp.dest('dist'))
      .pipe(gulpRename('release.min.js'))
      .pipe(gulpUglify())
      .pipe(gulpSourcemaps.write('./'))
      .pipe(gulp.dest('dist'));
  });


  //gulp.task('build', ['build'], function(){});

  gulp.task('default', [
    'dev'
  ]);

})();