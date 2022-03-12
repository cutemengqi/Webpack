/*
 * @Author: mengqi
 * @Date: 2022-03-10 22:13:12
 * @LastEditTime: 2022-03-13 00:48:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\CreatePlugin\lib\zipPlugin.js
 */
const JSZip = require("jszip");
const fs = require('fs');
const path = require("path");
module.exports= class ZipPlugin {
    constructor(props){
        this.props = props;     
    }
    apply(complier){
        const zip = new JSZip();
        const { filename, outputPath } = this.props;
        complier.hooks.emit.tapAsync('ZipPlugin',(compilation,callback)=>{
            /**
             * Create a directory if it doesn’t exist, return a new JSZip object with the new folder as root
             * 即压所报解压后改文件夹为根目录
             */
            const folder = zip.folder(filename);  
            const assets = compilation.assets;
            for(let fileName in assets){
                folder.file(fileName,assets[fileName].source())
            }
            zip.generateAsync({type:'nodebuffer'}) // Generates the complete zip file at the current folder level.
            .then( content => {
                fs.stat(outputPath,err => { // 判断包将要存放的路径是否存在
                    if(err){
                        fs.mkdir(outputPath,(err)=> {
                            if(err){
                                process.exit(2)
                            }else{
                                fs.writeFile(path.join(outputPath,`${filename}.zip`),content,(err)=> {
                                    if(err){
                                        process.exit(2)
                                    }else{
                                        callback && callback();
                                    }
                                    
                                })
                            }
                        });


                    }
                })
               

            })
            
            
        })


    }

}
