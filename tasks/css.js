// 处理css文件
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './utli/args'

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public/css'))
        // 正规应该有热更新
})