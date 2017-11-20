let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

gulp.task('sass', () => {
  return gulp.src('*.scss')
        .pipe (sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('.'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "."
    },
    notify: false
  })
});

gulp.task('watch',['serve', 'sass'], function() {
  gulp.watch('*.scss', ['sass'])
  // gulp.watch('public/*.html', browserSync.reload)
  gulp.watch('index.html', browserSync.reload)
});

gulp.task('default', ['watch']);
