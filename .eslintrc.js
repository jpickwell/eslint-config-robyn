'use strict';

module.exports = {
  extends: [
    require.resolve('./node.js'),
    require.resolve('./jest.js'),
    require.resolve('./commonjs.js'),
  ],
  root: true,
  rules: {},
};
