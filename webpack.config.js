module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: "bundle.js",
    libraryTarget: 'umd',
    library: 'remoteDom'
  },
  module: {
    loaders: [ {test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }}
    ]
  }
};
