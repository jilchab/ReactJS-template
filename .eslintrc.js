module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [0],
    // Indent with 4 spaces
    "indent": ["error", 4],
    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],
    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],
  },
};
