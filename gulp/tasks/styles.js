var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    cssComb = require('gulp-csscomb'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');

gulp.task('comb', function () {
    return gulp.src('./app/assets/styles/**/*.css')
        .pipe(cssComb())
        .pipe(gulp.dest('./app/assets/styles/**/*.css'));
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});