const path = require('path');

let name = 'app'

module.exports = {
  entry : `./src/${name}.ts`,
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : `${name}.bundle.js`
  },
  module : {
    rules : [
      {
        test: /\.js$/, // 자스인지 확인할 거야.
        use : 'babel-loader',
        exclude : /node_modules/
      },
      {
        test: /\.ts$/, // 타스인지 확인할 거야.
        use : 'ts-loader',
        exclude : /node_modules/
      },
    ]
  },
  resolve : {
    extensions : ['.ts','.js']
  }
}