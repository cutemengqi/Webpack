/*
 * @Author: your name
 * @Date: 2022-02-07 14:43:36
 * @LastEditTime: 2022-02-19 00:58:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\geektime-webpack-course-master\code\chapter04\my-project\builder-webpack\src\index\index.js
 */
import { helloworld } from './helloworld';
// import '../../common';
document.write(helloworld());

if (module.hot) {
    module.hot.accept('./helloworld.js', function() { //告诉 webpack 接受热替换的模块
        console.log('Accepting the updated printMe module!');
        document.write(helloworld());
    })
}