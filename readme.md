1、部署项目
{
    本地源代码
    服务器模块（后端代码）
    各种配置
}
    /-app   //放置本地源代码
        /-css   //css文件
        /-js    //js文件
        /-views //html文件，这里使用exprss框架，所以存放.ejs文件
    /-server    //服务器模块，安装express
    /-tasks     //部署gulp自动化打包等
    .babelrc    //转化es6代码
    gulpfile.babel.js   //gulp配置文件，每次运行gulp命令都会先读取该文件，按文件指定的规则去运行
2、tasks详解
    1、html、css、js gulp处理
    2、浏览器监听
       服务器监听
    3、建立任务清空server端指定的文件，因为每次改动html、css、js就会监听重新编译生成server下的文件
    3、按一定次序运行上述各个任务
    4、使用default任务简化gulp指令
3、开启gulp任务后文件流动
    app/css/*.css   ->  server/public/css
    app/js/*.js     ->  server/public/js
    app/views/*.ejs ->  server/             //默认生成到server/views下
4、es6项目
    前端js部分
        分模块: 倒计时模块  //处理页面倒计时功能需求
                计算模块    //处理页面计算功能需求
                接口模块    //定义前端请求ajax
                基本模块    //处理页面Dom交互
        多重继承统一模块：
                继承各个分模块
                补充事件
                绑定前端页面各种监听事件
    服务端
        启动服务
        编写路由接口
            编写前端发起请求的响应逻辑
5、由于跳过es6基础学习阶段，导致可能漏过某些配置，最终引入js出现问题，应该是es6语法无法被浏览器解析的原因，试过将es6转为es5,但是只有总模块转化为es5，分模块未转化为es5，尝试采用将每个过程都先转化为es5,但最终还是有内容编译失败