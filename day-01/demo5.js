//开始  创建一个 基于node 的 服务器 
//  这是一件 比较有成就感的  事情   不做回应

let http = require('http') //引入加载http模块
// http.
// console.log(http);

let server = http.createServer();

// console.log(server);
// 触发 服务器的 request 的请求事件，然后执行参数(晓得了别人问你吃没吃)
server.on('request',()=>{
    console.log('收到客户端的请求了');
})  

server.listen(7000,()=>{
    console.log("服务器启动成功，点击http://localhost:7000");
})  // 监听 7000端口号，监听时并运行 日志 令其点击进入 本地页面的7000端口进入


