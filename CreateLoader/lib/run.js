/*
 * @Author: your name
 * @Date: 2022-03-09 00:13:59
 * @LastEditTime: 2022-03-10 01:37:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\CreateLoader\lib\run.js
 */
const { runLoaders } = require('loader-runner');
const fs = require('fs');
const glob = require('glob-all');
module.exports = function run(source,loaders){
    const fileArry = glob.sync(source);
    fileArry.map(item => {
        runLoaders({
            resource:item, // 必须是绝对路径
            loaders, // loader是路径
            readResource:fs.readFile.bind(fs),
            
        },(err,result)=> {
            if(err){
                process.exit(2)
            }
        })

    })
    

}
