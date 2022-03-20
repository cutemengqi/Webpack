/*
 * @Author: your name
 * @Date: 2022-03-05 11:09:23
 * @LastEditTime: 2022-03-05 23:12:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\WebpackComplier\self-webpack-compile-config.js
 */
const path = require('path');
module.exports ={
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        fileName:'index.js',
        path:path.resolve(__dirname,'dist')
    }
}
