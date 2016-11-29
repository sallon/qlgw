/**
 * Created by yubo on 16/6/1.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('public/_sass/*.scss')
    //.pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('watch', function () {
    gulp.watch('public/_sass/*.scss', ['sass']);
})
