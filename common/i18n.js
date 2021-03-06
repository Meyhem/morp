/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    en: 'en',
    de: 'de',
  },
  defaultNS: [],
  localePath: path.resolve('./public/static/locales'),
})
