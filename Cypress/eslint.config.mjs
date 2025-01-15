import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    eslintConfigPrettier,
  ],
  plugins: [eslintPluginPrettier],
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
};

  