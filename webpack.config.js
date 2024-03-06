const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to files ending in .js
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use the babel-loader for transpiling JS files
          options: {
            presets: ['@babel/preset-env'] // Use @babel/preset-env for converting ES6+ code to ES5
          }
        }
      }
    ]
  }
};
