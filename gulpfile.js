const fs = require('fs');
const zip = require("gulp-zip");
const gulp = require('gulp');
const typescript = require('gulp-tsc');

gulp.task("deploy", function () {
  return gulp.src(["**"])
      .pipe(zip("deploy/deployment-package.zip"))
      .pipe(gulp.dest("./"));
});

gulp.task('compile', function () {
  gulp.src(['**/*.ts', '!**/node_modules/**'])
  .pipe(typescript())
  .pipe(gulp.dest('./'));
});

gulp.task('default', ['deploy']);