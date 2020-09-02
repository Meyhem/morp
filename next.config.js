/* eslint-disable @typescript-eslint/no-var-requires */
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  en: 'en',
  de: 'de',
}

module.exports = {
  poweredByHeader: false,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    testValue1: 'Hello',
    testValue2: 'there',
  },
  serverRuntimeConfig: {
    testServerValue1: 'General',
    testServerValue2: 'Kenobi',
  },
}
