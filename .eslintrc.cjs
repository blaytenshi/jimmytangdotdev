module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', './eslint/index.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh'],
  rules: {
    // this eslint rule may trip if you name your Functional Component in all caps
    'react-refresh/only-export-components': 'warn',
    // rule trying to stop you from using ' or " and replace them with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;
    'react/no-unescaped-entities': 'off',
    // shut prop-types up
    'react/prop-types': 'off',
  }
};
