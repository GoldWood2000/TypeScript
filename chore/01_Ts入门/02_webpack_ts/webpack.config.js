const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ]
      },
      devServer: {

      },
      resolve: {
          extensions: ['.ts', '.js', '.cjs', '.json'],
      },
      plugins: [
          new HtmlWebPackPlugin({
              template: './index.html'
          })
      ]
}