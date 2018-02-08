var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require("browserify");
var connect = require("gulp-connect");
var source = require("vinyl-source-stream");

paths = {
  bundles: './bundle/',
  src: './src/'
};

/********* TASKLIST *********/
var taskList = ['webserver', 'html', 'js', 'scss', 'images', 'watch'];
gulp.task('default', taskList);

/********* WEBSERVER *********/
gulp.task('webserver', function () {
  connect.server({
        host : '0.0.0.0',
        root : "./bundle/",
        livereload : false,
        port : 8001
    });
});

/********* HTML *********/
gulp.task('html', function () {
  gulp.src(paths.src + '*.html')
      .pipe(gulp.dest(paths.bundles))
});

/********* IMAGES *********/
gulp.task('images', function () {
  gulp.src(paths.src + '**/*')
      .pipe(gulp.dest(paths.bundles))
});

/********* JS *********/
gulp.task('js', function () {
  return browserify({
        entries: [paths.src + "/scripts/index.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest(paths.bundles + "/js/"));
});

/********* SCSS *********/
gulp.task('scss', function () {
  gulp.src(paths.src + 'scss/all.scss')
      .pipe(rename('main.css'))
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.bundles + 'css/'))
});

/********* WATCHER *********/
gulp.task('watch', function () {
  gulp.watch(paths.src + 'scripts/**/*.js', ['js']);
  gulp.watch(paths.src + '*.html', ['html']);
  gulp.watch(paths.src + 'scss/**/*.scss', ['scss']);
  gulp.watch(paths.src + 'images/**/*', ['images']);
});
