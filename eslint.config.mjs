export default [
    {
      ignores: ['node_modules/**'],
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: {
        prettier: require('eslint-plugin-prettier'),
      },
      rules: {
        'prettier/prettier': 'error', // Enforce Prettier rules as errors
        'no-console': 'warn', // Warn when console statements are used
        'no-unused-vars': 'warn', // Warn on unused variables
        'react/prop-types': 'off', // Disable prop-types rule for React
        'react/react-in-jsx-scope': 'off', // Disable React-in-JSX-scope rule for React 17+
        eqeqeq: 'warn', // Warn when `==` or `!=` is used instead of `===` or `!==`
        'no-trailing-spaces': 'error', // Disallow trailing spaces
        indent: ['error', 2], // Enforce 2-space indentation
        semi: ['error', 'always'], // Enforce semicolons
        quotes: ['error', 'single'], // Enforce single quotes
      },
    },
  ];
  