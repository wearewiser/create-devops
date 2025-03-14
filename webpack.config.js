const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: "create-devops",
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['ts-loader']
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules/ini')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  stats: {
    warningsFilter: /^(?!CriticalDependenciesWarning$)/
  }
};

