var gulp = require('gulp');
var ts = require('gulp-typescript');

function errorLog (error) {
    console.error.bind(error);
    this.emit('end');
}

gulp.task('copy_js_lib', function() {
    return gulp.src([
            'jspm_packages/github/jmcriffey/bower-traceur-runtime@0.0.91/traceur-runtime.min.js',
            'jspm_packages/system.js',
            'bower_components/angular2-build/angular2.js'])
        .pipe(gulp.dest('src/assets/libs/'));
});

gulp.task('typescript-compile', function(){
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            module: 'commonjs',
            target : 'ES5',
            emitDecoratorMetadata: true,
            declarationFiles: false,
            noExternalResolve: true
        })).js.pipe(gulp.dest('src'));
});


gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['typescript-compile']);
});

gulp.task('default', ['typescript-compile', 'copy_js_lib']);