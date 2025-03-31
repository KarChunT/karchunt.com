module.exports = {
  // ...existing configuration...
  module: {
    rules: [
      // ...existing rules...
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'babel-loader', // Optional: Use Babel if you need to transpile JSX
          },
          {
            loader: '@mdx-js/loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mdx'], // Add .mdx to the list of extensions
  },
};
