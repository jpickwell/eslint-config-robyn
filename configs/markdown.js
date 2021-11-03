'use strict';

const { override } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  overrides: [
    override(['md'], {
      processor: 'markdown/markdown',
    }),
    override(['md/**'], {
      parserOptions: {
        ecmaFeatures: {
          // Adding a "use strict" directive at the top of every code block is
          // tedious and distracting, so opt into strict mode parsing without
          // the directive.

          impliedStrict: true,
        },
      },
      rules: {
        // The Markdown parser automatically trims trailing newlines from code
        // blocks.

        'eol-last': 'off',

        // In code snippets and examples, these rules are often
        // counterproductive to clarity and brevity.

        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',

        // Adding a "use strict" directive at the top of every code block is
        // tedious and distracting. The config opts into strict mode parsing
        // without the directive.

        strict: 'off',

        // The processor will not receive a Unicode Byte Order Mark from the
        // Markdown parser.

        'unicode-bom': 'off',
      },
    }),
  ],
  plugins: ['markdown'],
};