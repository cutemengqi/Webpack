/*
 * @Author: your name
 * @Date: 2022-03-05 19:14:16
 * @LastEditTime: 2022-03-05 22:51:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\WebpackComplier\lib\index.js
 */
const config  = require('../self-webpack-compile-config');
const Complier = require('./Complier');
const webpackComplier = new Complier(config);
webpackComplier.run();
webpackComplier.emitFile();

