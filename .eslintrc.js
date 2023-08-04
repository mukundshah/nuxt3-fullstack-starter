const process = require('node:process')
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {

  extends: ["@antfu", "plugin:tailwindcss/recommended"],

  rules: {
    "semi": ["error", "always"],
    "@typescript-eslint/semi": ["error", "always"],
    "vue/no-multiple-template-root": "off",
    "vue/component-options-name-casing": ["error", "kebab-case"]
  },

  ignorePatterns: ["node_modules", "dist", ".nuxt", ".output", "coverage", "components.d.ts", "nuxt.d.ts"]
}
