// .storybook/preview.js
/** @type { import('@storybook/server').Preview } */
const preview = {
  globals: {
    // drupalTheme: 'claro',
    drupalTheme: 'boral',
    supportedDrupalThemes: {
      boral: { title: 'Boral' },
      umami: { title: 'Umami' },
      claro: { title: 'Claro' },
    },
  },
  parameters: {
    server: {
      url: 'http://boral.lndo.site/storybook/',
    },
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
