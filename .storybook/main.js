module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
};
