var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src(['bower_components/bootstrap/scss/bootstrap.scss', 'public/assets/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('public/assets/scss/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {
	browserSync.init({
		server: ["./views/", "./public/"]
	});

	gulp.watch(['bower_components/bootstrap/scss/bootstrap.scss', 'public/assets/scss/*.scss'], ['sass']);
	gulp.watch('views/index.html').on('change', browserSync.reload);

});

gulp.task('default', ['serve']);

