var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var tsProject = ts.createProject('tsconfig.json');

var version = '1.0.2';

// -------------------------------------------
// JS
// -------------------------------------------

gulp.task('jsWithoutVersioning', function() {

    // copy d.ts
    gulp.src('src/cloudcredits.d.ts')
        .pipe(gulp.dest('dist'));

    // convert to js
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));

});

gulp.task('jsWithVersioning', function() {

    // copy d.ts
    gulp.src('src/cloudcredits.d.ts')
        .pipe(rename('cloudcredits-' + version + '.d.ts'))
        .pipe(gulp.dest('dist'));

    // convert to js
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(rename({
            suffix: '-' + version
        }))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));
});

// -------------------------------------------
// CSS
// -------------------------------------------

gulp.task('cssWithoutVersioning', function() {

    return gulp
        .src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('cssWithVersioning', function() {

    return gulp
        .src('src/*.less')
        .pipe(less())
        .pipe(rename({
            suffix: '-' + version
        }))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.watch('src/*.less', gulp.series('cssWithoutVersioning', 'cssWithVersioning'));
gulp.watch('src/*.ts', gulp.series('jsWithoutVersioning', 'jsWithVersioning'));

gulp.task('default', gulp.series('jsWithoutVersioning', 'jsWithVersioning', 'cssWithoutVersioning', 'cssWithVersioning'));