/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../web/themes/custom/**/stories/**/*.mdx',
    '../web/themes/custom/**/stories/**/*.stories.@(json|yaml|yml)',
    '../web/modules/**/stories/**/*.mdx',
    '../web/modules/**/stories/**/*.stories.@(json|yaml|yml)',
    // '../web/themes/custom/**/components/**/*.stories.@(json|yaml|yml)',
    // '../web/themes/custom/**/components/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@lullabot/storybook-drupal-addon',
  ],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tags',
  },
}
export default config
