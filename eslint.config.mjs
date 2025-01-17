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
        'prettier/prettier': 'error',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'eqeqeq': 'warn',
        'no-trailing-spaces': 'error',
        'indent': ['error', 2],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
      },
    },
  ];
  