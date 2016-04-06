var path = require('path');
module.exports = {
  entry:['./src/main.js'],
  output: {
    path:'./dist',
    filename:'bundle.js'
  },
  resolve:{
    extensions:['','.js','.json','.jsx'],
    root:[path.resolve(__dirname+'/src')]
  },
  module:{
    loaders:[
     {
       test:/\.jsx?/,
       loaders:['babel'],
       exclude:/node_modules/
     }
    ]
  },
  devTool:'cheap-module-eval-source-map',
  devServer:{
    hot:true,
    inline:true,
    contentBase:'./dist/',
    progress:true,
    colors:true,
    port:3000,
  }
};

