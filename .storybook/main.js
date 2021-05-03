const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../shared/**/*.stories.@(js|jsx|ts|tsx)',
    '../index-page/*.stories.tsx',
    '../case-study-page/*.stories.tsx'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
    ]);

    return config;
  }
};
