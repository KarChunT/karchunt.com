import { loader as fumadocsLoader } from 'fumadocs-core/source';

module.exports = {
  module: {
    rules: [
      {
        test: /\.mdx$/,
        use: [
          {
            loader: fumadocsLoader, // Use fumadocs-core loader for JS files
          },
        ],
      },
    ],
  },
};
