const test = require('tape')
const config = require('..')

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

test('test basic properties of config', (t) => {
  t.ok(Array.isArray(config.extends))
  t.ok(isObject(config.parserOptions))
  t.ok(Array.isArray(config.plugins))
  t.ok(isObject(config.settings))
  t.ok(isObject(config.rules))
  t.end()
})
