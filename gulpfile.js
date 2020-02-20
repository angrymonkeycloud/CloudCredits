var gulp = require('gulp');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var tsProject = ts.createProject('tsconfig.json');

//------------------------------
// Semantic Versioning

// 1. Major: Changes that break backward compatibility | Increment the first digit and reset middle and last digits to zero.
// 2. Minor: Backward compatible new features | Increment the middle digit and reset last digit to zero.
// 3. Patch: Backward compatible bug fixes | Increment the third digit.
// more info at: https://semver.org/

var version = '1.1.0';

// -------------------------------------------
// JS
// -------------------------------------------

gulp.task('distributeJS', function() {

    // copy d.ts
    gulp.src('src/cloudcredits.d.ts')
        .pipe(gulp.dest('dist/' + version));

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist/' + version + '/js'));
});

// -------------------------------------------
// CSS
// -------------------------------------------

gulp.task('distributeCSS', function() {

    return gulp
        .src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/' + version + '/css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/' + version + '/css'));
});


gulp.task('default', gulp.series('distributeJS', 'distributeCSS'));

// -------------------------------------------
// Test
// -------------------------------------------

// gulp.task("generateTestCSS", function() {
//     return gulp
//         .src('src/*.less')
//         .pipe(less())
//         .pipe(gulp.dest("test/css"));
// });

// gulp.watch("src/*.less", gulp.series("generateTestCSS"));