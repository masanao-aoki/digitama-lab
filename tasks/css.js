var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

//setting
var settings = require('../gulpfile_settings');

gulp.task('css', function () {
    return gulp.src(
        [ settings.watch.css.files ]
    )
    .pipe(
        postcss(
            [ autoprefixer({browsers: ['last 5 version']}) ]
        )
    )
    .pipe(
        gulp.dest( settings.dest.css.dir )
    );
});
