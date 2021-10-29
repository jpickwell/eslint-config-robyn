'use strict';

let hasJestDom, hasTestingLibrary;

// const compact = require('lodash/fp/compact');
const readPkgUp = require('read-pkg-up');
const {
  // disableRules,
  // mapDeprecatedRules,
  override,
} = require('./lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

hasJestDom = false;
hasTestingLibrary = false;

try {
  const {
    packageJson: { dependencies, devDependencies, peerDependencies },
  } = readPkgUp.sync({ normalize: true });

  const allDeps = Object.keys({
    ...peerDependencies,
    ...devDependencies,
    ...dependencies,
  });

  hasJestDom = allDeps.includes('@testing-library/jest-dom');
  hasTestingLibrary = [
    '@testing-library/angular',
    '@testing-library/dom',
    '@testing-library/react',
    '@testing-library/vue',
  ].some((dependency) => allDeps.includes(dependency));
} catch {
  // ignore error
}

const configs = [require.resolve('./configs/jest.js')];

if (hasJestDom) {
  configs.push(require.resolve('./configs/jest-dom.js'));
}

if (hasTestingLibrary) {
  configs.push(require.resolve('./configs/testing-library.js'));
}

const rules = {
  // ...mapDeprecatedRules([
  //   'jest/no-expect-resolves',
  //   'jest/no-truthy-falsy',
  //   'jest/no-try-expect',
  //   'jest/prefer-inline-snapshots',
  // ]),
};

// module.exports = {
//   env: {
//     'jest/globals': true,
//   },
//   // extends: compact([
//   //   'plugin:jest/recommended',
//   //   hasJestDom ? 'plugin:jest-dom/recommended' : undefined,
//   //   hasTestingLibrary ? 'plugin:testing-library/vue' : undefined,
//   // ]),
//   plugins: compact([
//     'jest',
//     hasJestDom ? 'jest-dom' : undefined,
//     hasTestingLibrary ? 'testing-library' : undefined,
//   ]),
//   rules: {
//     ...disableRules(Object.keys(rules)),
//   },
// };

/** @type {BaseConfig} */
module.exports = {
  extends: configs,
  overrides: [
    override(
      [
        {
          directories: ['**/__tests__/**'],
          extensions: ['[jt]s'],
        },
        '{spec,test}.[jt]s',
      ],
      {
        rules,
      },
    ),
    override(
      [
        {
          directories: ['**/__tests__/**'],
          extensions: ['ts'],
        },
        '{spec,test}.ts',
      ],
      {
        rules,
      },
    ),
  ],
};
