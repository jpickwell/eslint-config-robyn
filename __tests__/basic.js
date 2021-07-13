const isObject = require('lodash/isObject');
const config = require('..');

test('basic properties of config', () => {
  expect(Array.isArray(config.extends)).toBeTruthy();
  expect(isObject(config.settings)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});
