// const test = require('tape')
const config = require('..')

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

// (t) => {
//   t.ok(Array.isArray(config.extends))
//   t.ok(isObject(config.parserOptions))
//   t.ok(Array.isArray(config.plugins))
//   t.ok(isObject(config.settings))
//   t.ok(isObject(config.rules))
//   t.end()
// }

test('test basic properties of config', () => {
  expect(Array.isArray(config.extends)).toBeTruthy()
  expect(isObject(config.parserOptions)).toBeTruthy()
  expect(Array.isArray(config.plugins)).toBeTruthy()
  expect(isObject(config.settings)).toBeTruthy()
  expect(isObject(config.rules)).toBeTruthy()
})
