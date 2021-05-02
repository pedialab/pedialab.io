module.exports = {
  stories: [
    '../shared/**/*.stories.@(js|jsx|ts|tsx)',
    '../indexPage/*.stories.tsx',
    '../caseStudyPage/*.stories.tsx'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
