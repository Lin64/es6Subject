// 监听html、css、js三大模块的变化
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulputil from 'gulp-util';
import livereload from 'gulp-livereload';
import args from './utli/args'

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
});
