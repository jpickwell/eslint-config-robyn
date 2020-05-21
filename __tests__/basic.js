const config = require('..');

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

test('test basic properties of config', () => {
  expect(Array.isArray(config.extends)).toBeTruthy();
  expect(isObject(config.parserOptions)).toBeTruthy();
  expect(Array.isArray(config.plugins)).toBeTruthy();
  expect(isObject(config.settings)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});
