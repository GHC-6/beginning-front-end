var path = require('path')                                      //引入path

module.exports = {                                              //注意这里是exports不是export
  entry: './src/script/importprofile.js',                                 //入口文件
  output: {                                                       //输出文件
    path: path.resolve(__dirname,'dist'),                      //输出文件的目录
    filename: 'bundle.js'                                        //输出文件的名称
  }
}