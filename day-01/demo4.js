let fs = require('fs');
let MdContent = "# 这个是 生成的文件内容"

// fs.writeFile('readme.md',MdContent , (err) => {
//     if (err) return console.log('写入文件失败！' + err.message)   // 如果文件写入失败，则报错
//     console.log('文件写入成功！')
// })  

// 尝试 生成（创建）   并写入  一个文件。 以 readme.md 为例

// --------------------------
fs.writeFile('readme>>.txt',MdContent , (err) => {
    if (err) return console.log('写入文件失败！' + err.message)   // 如果文件写入失败，则报错
    console.log('文件写入成功！')
})   //无法写入 带有特殊字符（>,<,?等）的 文件