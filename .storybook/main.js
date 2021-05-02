const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    '../shared/**/*.stories.@(js|jsx|ts|tsx)',
    '../indexPage/*.stories.tsx',
    '../caseStudyPage/*.stories.tsx'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
    ]);

    return config;
  }
};
