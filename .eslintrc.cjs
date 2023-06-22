module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    indent: ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
