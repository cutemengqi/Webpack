/*
 * @Author: your name
 * @Date: 2022-03-10 22:11:13
 * @LastEditTime: 2022-03-11 01:00:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \webpack\CreatePlugin\webpack.config.js
 */
const path = require('path');
const ZipPlugin = require('./lib/zipPlugin.js');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [
        new ZipPlugin({
            filename: 'offline',
            outputPath:path.resolve(__dirname,'build')
        })
    ]
}
