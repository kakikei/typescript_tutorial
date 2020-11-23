const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/ts/index.ts',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "indes.js"
  },
  module: {
    rule: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  }
}
