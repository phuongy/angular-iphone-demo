var gulp = require('gulp');
var browserSync = require('browser-sync');
var plugins = require('gulp-load-plugins')();


gulp.task('default', ['scripts','styles','html','browser-sync'], function() {
    gulp.watch("app/*.*", ['scripts', browserSync.reload]);
    gulp.watch("styles/app.css", ['styles']);
    gulp.watch("index.html", ['html']);
});

gulp.task('styles', function() {

    var stream = gulp.src('styles/app.css')
        //.pipe(plugins.rubySass({sourcemap: true}))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.reload({stream:true}));

    return stream;
});

gulp.task('scripts', function() {
	
	var stream = gulp.src('app/app.js')
        //.pipe(plugins.browserify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.reload({stream:true}));

    return stream;
});

gulp.task('html', function() {
	var stream = gulp.src('index.html')
		.pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({stream:true}));

    return stream;
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'build'
        }
    });
});
