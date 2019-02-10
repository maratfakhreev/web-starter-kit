const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './app/index.html',
  filename: './index.html',
});
const hmrPlugin = new webpack.HotModuleReplacementPlugin();
const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

const appConfig = {
  mode: process.env.NODE_ENV,
  entry: [path.resolve('app', 'index.js')],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.resolve('./app'), 'node_modules'],
    alias: {
      config: path.resolve('config'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
};

const developmentConfig = {
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    contentBase: path.resolve('dist'),
    hot: true,
  },
  devtool: 'eval-source-map',
  plugins: [hmrPlugin],
};

const productionConfig = {
  output: {
    publicPath: '/',
  },
  plugins: [definePlugin],
};

module.exports = merge(
  appConfig,
  process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
);
