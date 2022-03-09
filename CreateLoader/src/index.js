/*
 * @Author: your name
 * @Date: 2022-03-09 23:45:38
 * @LastEditTime: 2022-03-10 00:30:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\CreateLoader\src\index.js
 */
const run = require('../lib/run');
// const px2remLoader = require('../lib/px2rem');
const path = require('path');
run(path.resolve(__dirname,'*.less'),[{
    loader:path.join(__dirname,'../lib','px2rem.js'),
    options:{
        path:path.resolve(__dirname,'../build')
    }
}])
