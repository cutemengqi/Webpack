/*
 * @Author: your name
 * @Date: 2022-03-20 23:32:43
 * @LastEditTime: 2022-03-20 23:41:10
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \WebpackComplier\lib\Complier.js
 */

const path = require('path')
const fs = require('fs');
const {getAst,getDependencies,transform} = require('./parser.js');
module.exports =  class Complier {
    constructor(options){
        this.options = options;
    }
    
    run(){
        const {entry} = this.options;
        this.dependencies = [];
        this.dependencies.push(this.buildModel(entry,true));
        this.dependencies.forEach(item=> {
            if(item.dependencies){
                item.dependencies.forEach(secondItem=> {
                    this.dependencies.push(this.buildModel(secondItem))
                })
            }
        })
        this.emitFile();
    }
    
    buildModel(fileName,isEntry=false){
        let ast;
        if(isEntry){
            ast = getAst(fileName)         
        }else{
            ast = getAst(path.join(process.cwd(),'./src',`${fileName}.js`))
        }
        return {
            fileName,
            dependencies:getDependencies(ast),
            transforCode:transform(ast)
        }

    }
    emitFile(){
        const {
            output:{
                fileName,
            },
            output} = this.options;
        const outputPath = path.join(output.path,fileName);
        let code = '';
        this.dependencies.map((item) => {
                code +=  `'${item.fileName}':function(module,exports,require){
                ${item.transforCode.code}
                },`

        })
        const emitSource = `(function(modules){
                function require(moduleId){
                    const module = {
                        exports:{}
                    }
                    modules[moduleId].call(module.exports,module,module.exports,require)
                    return module.exports;
                }
                require('${this.options.entry}')

        })({${code}})`;
        fs.mkdir(outputPath,()=> {
            fs.writeFileSync(outputPath,emitSource,'utf-8')
        });

    }
    
}
