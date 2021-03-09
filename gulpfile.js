var gulp = require('gulp');
var rename = require('gulp-rename')
var minJs = require("gulp-babel-minify");


gulp.task("minifyjs", function(){
    console.log('Compiling JS ...');
    return gulp.src("./src/asyncform.js")
    .pipe(minJs({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest("./dist"));
});

/* task for compiling main.less if ANY .less file changes */
/* start with 'gulp watch' */
gulp.task('watch', function(){
    gulp.watch(['./src/*.js'], gulp.series('minifyjs')); 
})

/* Default Task */
/* start with 'gulp' */
gulp.task('default', gulp.parallel('minifyjs', 'watch'));