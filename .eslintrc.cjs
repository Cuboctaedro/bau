module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb-typescript', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: ['react-refresh'],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    indent: ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': ['warn', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off'
  }
};