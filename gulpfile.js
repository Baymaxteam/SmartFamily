var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});


//	<!-- Bootstrap Core CSS -->
// <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
// <!-- MetisMenu CSS -->
// <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
// <!-- Custom CSS -->
// <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
// <!-- Custom Fonts -->
// <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">


// gulp.task('styles', function() {
//     return gulp.src(
//             ['bower_components/bootstrap/dist/css/bootstrap.css',
//                 'bower_components/metisMenu/dist/metisMenu.css',
//                 'dist/css/sb-admin-2.css'
//             ])
//         .pipe(concat('SmartHomeCSS.css'))
//         .pipe(gulp.dest('build/css/'))

//     .pipe(minifyCSS({
//             keepBreaks: true,
//         }))
//         .pipe(rename(function(path) {
//             path.basename += ".min";
//             path.extname = ".css";
//         }))
//         .pipe(gulp.dest('build/css/'))

//     .pipe(notify({
//         message: 'Styles task complete'
//     }));


// });


// gulp.task('concat', function() {
//     return gulp.src(
//             ['bower_components/bootstrap/dist/css/bootstrap.css',
//                 'bower_components/metisMenu/dist/metisMenu.css',
//                 'dist/css/sb-admin-2.css'
//             ])
//         .pipe(concat('SmartHomeCSS.css'))
//         .pipe(gulp.dest('build/css/'));
// });

// gulp.task('minify-css', ['concat'], function() {
//     return gulp.src('build/css/SmartHomeCSS.css')
//         .pipe(minifyCSS({
//             keepBreaks: true,
//         }))
//         .pipe(rename(function(path) {
//             path.basename += ".min";
//             path.extname = ".css";
//         }))
//         .pipe(gulp.dest('build/css/'));
// });

// <!-- jQuery -->
// <script src="../bower_components/jquery/dist/jquery.min.js"></script>
// <!-- Bootstrap Core JavaScript -->
// <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
// <!-- Metis Menu Plugin JavaScript -->
// <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>
// <!-- Custom Theme JavaScript -->
// <script src="../dist/js/sb-admin-2.js"></script>

// gulp.task('uglify', function() {
//     return gulp.src(
//             ['bower_components/jquery/dist/jquery.js',
//                 'bower_components/bootstrap/dist/js/bootstrap.js',
//                 'bower_components/metisMenu/dist/metisMenu.js',
//                 'js/sb-admin-2.js'
//             ])
//         .pipe(uglify())
//         .pipe(rename(function(path) {
//             path.basename += ".min";
//             path.extname = ".js";
//         }))
//         .pipe(gulp.dest('build/js/'));
// });

gulp.task('default', 'webserver');
//gulp.task('default', ['minify-css', 'webserver']);
//
