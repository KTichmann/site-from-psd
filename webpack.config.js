const path = require('path');

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: {
    path: path.join(__dirname, 'app/temp'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
