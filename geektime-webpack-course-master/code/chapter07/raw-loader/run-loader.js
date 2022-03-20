/*
 * @Author: your name
 * @Date: 2022-02-07 14:43:36
 * @LastEditTime: 2022-03-07 00:26:10
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\geektime-webpack-course-master\code\chapter07\raw-loader\run-loader.js
 */
const { runLoaders } = require('loader-runner');
const fs = require('fs');
const path = require('path');
console.log(path.join(__dirname, './src/demo.txt'),
'aaa', path.join(__dirname, './src/raw-loader.js'),
)
runLoaders({
    resource: path.join(__dirname, './src/demo.txt'),
    loaders: [
        {
            loader: path.join(__dirname, './src/raw-loader.js'),
            options: {
                name: 'test'
            }
        }
    ],
    context: {
        emitFile: () => {}
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    err ? console.log(err) : console.log(result);
});