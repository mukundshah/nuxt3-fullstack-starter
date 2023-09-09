const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],

  rules: {
    'vue/no-multiple-template-root': 'off',
    'vue/component-options-name-casing': ['error', 'kebab-case'],
  },
}
