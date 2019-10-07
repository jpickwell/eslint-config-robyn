module.exports = {
  extends: ['.'],
  env: {
    'jest/globals': true
  },
  plugins: ['jest'],
  root: true,
  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error'
  }
}
