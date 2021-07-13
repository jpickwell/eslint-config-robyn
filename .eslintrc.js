module.exports = {
  extends: ['.', 'plugin:jest/recommended'],
  root: true,
  globals: {
    module: true,
    require: true,
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
