const path = require('path');
module.exports = {
    entry: './src/test1.js', // 打包入口
    output: { // 打包出口
        path: path.resolve(__dirname, ''), 
        filename: 'bundle.js' // 打包出来的文件名
    },
    mode: 'none'
};