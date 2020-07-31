let fs = require('fs');

fs.readFile('file.txt', 'utf-8', function (err, data) {
    if (err) return console.log('读取文件失败：' + err.message)
    //若读出错则输出错误

    console.log('读取文件成功，内容是' + data)
    //若成功则 读内容输出到控制台
})

//读取同文件夹下的  file.txt  文本的内容