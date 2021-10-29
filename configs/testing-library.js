'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  plugins: ['testing-library'],
  rules: {
    'testing-library/await-async-query': 'error',
    'testing-library/await-async-utils': 'error',
    'testing-library/await-fire-event': 'error',
    'testing-library/consistent-data-testid': 0,
    'testing-library/no-await-sync-events': 0,
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-container': 'error',
    'testing-library/no-debug': 'error',
    'testing-library/no-debugging-utils': 0,
    'testing-library/no-dom-import': ['error', 'vue'],
    'testing-library/no-manual-cleanup': 0,
    'testing-library/no-node-access': 'error',
    'testing-library/no-promise-in-fire-event': 'error',
    'testing-library/no-render-in-setup': 0,
    'testing-library/no-unnecessary-act': 0,
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/no-wait-for-multiple-assertions': 0,
    'testing-library/no-wait-for-side-effects': 0,
    'testing-library/no-wait-for-snapshot': 0,
    'testing-library/prefer-explicit-assert': 0,
    'testing-library/prefer-find-by': 'error',
    'testing-library/prefer-presence-queries': 0,
    'testing-library/prefer-query-by-disappearance': 0,
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-user-event': 0,
    'testing-library/prefer-wait-for': 0,
    'testing-library/render-result-naming-convention': 'error',
  },
};
