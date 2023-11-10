module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'react/jsx-filename-extension': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-case-declarations': 'off',
    'no-inner-declarations': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'react/jsx-pascal-case': 'off',
    'no-return-assign': 'off',
    'linebreak-style': 'off',
    'no-tabs': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-closing-tag-location': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
