const fs = require('fs')

// // 回调函数模式
// fs.readFile('./content.txt', (err, data) => {
//     // 如果出错 则抛出错误
//     if(err) throw err
//     // 输出文件内容
//     console.log(data.toString())
// })

// // Promise形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./content.txt',(err, data) => {
        //如果出错了 就调用reject方法
        if(err) reject(err)
        // 成功了就调用resolve方法
        resolve(data)
    })
})
//调用then
p.then((value) => {
    console.log(value.toString())
},(reason) => {
    console.log(reason)
})