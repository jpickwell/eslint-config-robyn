const { CLIEngine } = require('eslint')
// const test = require('tape')

// (t) => {
//   const cli = new CLIEngine({
//     useEslintrc: false,
//     configFile: 'index.js'
//   })
//
//   const code =
//     'const foo = 1\nconst bar = function() {\n  /* do nothing */\n}\n\nbar(foo)\n'
//
//   t.equal(cli.executeOnText(code).errorCount, 0)
//   t.end()
// }

test('load config in eslint to validate all rule syntax is correct', () => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js'
  })

  const code =
    'const foo = 1\nconst bar = function() {\n  /* do nothing */\n}\n\nbar(foo)\n'

  expect(cli.executeOnText(code).errorCount).toEqual(0)
})
