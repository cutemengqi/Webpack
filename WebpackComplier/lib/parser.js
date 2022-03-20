/*
 * @Author: your name
 * @Date: 2022-03-03 00:26:30
 * @LastEditTime: 2022-03-06 17:17:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Webapck\WebpackComplier\lib\parser.js
 */
const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const path = require('path');
const {transformFromAst} = require('babel-core')
const getAst=(path)=> {
    const content = fs.readFileSync(path,'utf8');
    return babylon.parse(content,{
        sourceType:'module'
    })

};
const    getDependencies =(ast)=>{
    const dependencies = [];
    traverse(ast,{
        ImportDeclaration:({node})=> {
            dependencies.push(node.source.value)
        }
    });
    return dependencies;

}
const transform = (ast) => transformFromAst(ast,null,{
    presets:['env']
});
module.exports={
   getAst,
   getDependencies,
   transform
 
}
// const sourceAst = getAst(path.join(__dirname,'../src/index.js'))
// const deend = getDependencies(sourceAst)
