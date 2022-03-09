/*
 * @Author: your name
 * @Date: 2022-03-08 23:35:32
 * @LastEditTime: 2022-03-10 01:38:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\CreateLoader\lib\px2rem.js
 */
const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');
module.exports = function (source){
    const fileName = loaderUtils.interpolateName(this,'[name].[ext]') // 使用多个占位符和/或正则表达式插入文件名模板。 
    const url = this.loaders[0].options.path;
    const content = source.replace(/[0-9]+px/,(val)=>{
        return `${parseInt(val,10)/16 }rem`;
    });
    fs.stat(this.loaders[0].options.path,(err,stats)=> {
        if(err){
            fs.mkdir(url,err=>{
                if(err){
                    throw Error('无该目录')
                }else{
                    fs.writeFileSync(path.join(url,fileName),content)
                }
            })
        }else{
            fs.writeFileSync(path.join(url,fileName),content)
        }
    });



}