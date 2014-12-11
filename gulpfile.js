var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('public/modules/**/*')
});

gulp.task('html', function() {
  gulp.src('public/modules/**/views/*.html')
});

gulp.task('css', function() {
  gulp.src('public/modules/**/css/*.css')
});

gulp.task('html_root',function(){
  gulp.src('*.html');
})

gulp.task('watch', function() {
  gulp.watch('public/modules/**/*', ['js']);
  gulp.watch('public/lib/**/*', ['js']);
  gulp.watch('public/modules/css/*.css', ['css']);
  gulp.watch(['public/modules/*.html',
    'public/modules/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver','html_root']);
