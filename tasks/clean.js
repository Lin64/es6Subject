// 每次编译清空服务器下的文件
import gulp from 'gulp';
import del from 'del';
import args from './utli/args';


gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})