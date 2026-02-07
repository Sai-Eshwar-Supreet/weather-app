const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  {
    files: ["./src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals:{
        ...globals.browser,
      }
    },
    rules: {
      "no-console": "warn",
    },
  },
  {
    files: [
        '*.config.js',
        '*.config.cjs',
        'webpack.*.js'
    ],
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script',
        globals: {
            ...globals.node,
        }
    }
  },
  prettier,
];
