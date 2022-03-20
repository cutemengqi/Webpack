/*
 * @Author: your name
 * @Date: 2022-03-08 23:50:17
 * @LastEditTime: 2022-03-13 00:19:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\geektime-webpack-course-master\code\chapter07\zip-plugin\plugins\zip-plugin.js
 */
const JSZip = require('jszip');
const path = require('path');
const RawSource = require('webpack-sources').RawSource;
const zip = new JSZip();

module.exports = class ZipPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
            console.log(this.options.filename);
            const folder = zip.folder(this.options.filename);
console.log(compilation.assets,'aaaa')
            for (let filename in compilation.assets) {
                const source = compilation.assets[filename].source();
                console.log(filename,source,'aaaaa');
                folder.file(filename, source);
            }

            zip.generateAsync({
                type: 'nodebuffer'
            }).then((content) => {
                const outputPath = path.join(
                    compilation.options.output.path, 
                    this.options.filename + '.zip'
                );

                const outputRelativePath = path.relative(
                    compilation.options.output.path,
                    outputPath
                );
                compilation.assets[outputRelativePath] = new RawSource(content);
                console.log(outputRelativePath,'ppppppppp')
                callback();
            });
        });
    }
}