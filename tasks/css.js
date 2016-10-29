var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');

//setting
var settings = require('../gulpfile_settings');


gulp.task('css', function () {
    return gulp.src(
        [ settings.watch.css.files ],
        { base: 'src' }
    )
    .pipe(
        postcss(
            [ autoprefixer({browsers: ['last 1 version']}) ]
        )
    )
    .pipe(
        gulp.dest( setting.dest.css.dir )
    );
});
