//开始  创建一个 基于node 的 服务器 
//  且 做出回应

let http = require('http') //引入加载http模块
// http.
// console.log(http);

let server = http.createServer();

// console.log(server);
// 触发 服务器的 request 的请求事件，然后执行参数(晓得了别人问你吃没吃,且用res回应了人家)
// server.on('request',(req,res)=>{
//     console.log('收到客户端的请求了,请求路径是'+req.url);
//     // 我们可以监听 其 页面下的 子页面

//     res.write('<h1>Hello Node.js</h1><hr>')
//     res.end()//回应 且 用end（）方法 关闭 响应
// })  


// --------------------------------------------------------------
server.on('request',(req,res)=>{
    console.log('收到客户端的请求了,请求路径是'+req.url);
    // 我们可以监听 其 页面下的 子页面

// 练习：通过 跳转不同地址 显示不同内容
    if (req.url=='/login') {
        res.end('<h1>Login 1111</h1><hr>'+req.url)
        //用end（）方法 关闭 响应且 发送一段东西在（）内
    } else if(req.url=='/bee'){
        res.end('<h1>Bee!!!!!!!!!!</h1><hr>'+req.url)
        //用end（）方法 关闭 响应且 发送一段东西在（）内
    }else{
        res.end('<h1>Hello Node.js</h1><hr>'+req.url)
        //用end（）方法 关闭 响应且 发送一段东西在（）内
    }
}) 
server.listen(7000,()=>{
    console.log("服务器启动成功，点击:http://localhost:7000");
})  // 监听 7000端口号，监听时并运行 日志 令其点击进入 本地页面的7000端口进入


