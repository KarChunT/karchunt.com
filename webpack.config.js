import matter from 'gray-matter';

module.exports = {
  module: {
    rules: [
      {
        test: /\.mdx$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [
                () => (tree, file) => {
                  const { data } = matter(file.contents);
                  file.data = { ...file.data, frontMatter: data };
                },
              ],
            },
          },
          {
            loader: 'babel-loader', // Ensure Babel processes the MDX files
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mdx'], // Add .mdx to the extensions
  },
};
