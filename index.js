module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/standard',
    'prettier/unicorn'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['babel', 'markdown'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs']
      }
    }
  },
  rules: {
    // ensure incompatible rules are disabled
    camelcase: 'off',
    'new-cap': 'off',
    'no-unused-expressions': 'off',
    'valid-typeof': 'off',

    'array-callback-return': 'error',
    'babel/camelcase': ['error', { properties: 'never' }],
    'babel/new-cap': [
      'error',
      { newIsCap: true, capIsNew: false, properties: true }
    ],
    'babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'babel/valid-typeof': ['error', { requireStringLiterals: true }],
    'callback-return': 'error',
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-notation': 'error',
    'func-names': ['error', 'as-needed'],
    'generator-star-spacing': 'off',
    'guard-for-in': 'error',
    'import/first': 'error',
    'import/namespace': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/order': 'error',
    'init-declarations': ['error', 'never'],
    'lines-between-class-members': 'error',
    'max-statements-per-line': 'error',
    'no-await-in-loop': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],
    'no-mixed-requires': ['error', { grouping: true }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-process-exit': 'error',
    'no-prototype-builtins': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true }
    ],
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-warning-comments': [
      'warn',
      { terms: ['fixme', 'hack', 'todo', 'xxx'] }
    ],
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: false }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-await': 'error',
    'sort-vars': ['error', { ignoreCase: true }],
    'vars-on-top': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/prevent-abbreviations': 'off'
  }
}
