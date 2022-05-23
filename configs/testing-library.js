'use strict';

const { hasDependencies, testsOverride } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		testsOverride({
			extends: [
				hasDependencies(['@testing-library/vue'])
					? 'plugin:testing-library/vue'
					: 'plugin:testing-library/dom',
			],
		}),
	],
	plugins: ['testing-library'],
	rules: {
		// Because the plugin config(s) are added in an override, the
		// find-new-rules script won't see those added rules.

		'testing-library/await-async-query': 'off',
		'testing-library/await-async-utils': 'off',
		'testing-library/await-fire-event': 'off',
		'testing-library/consistent-data-testid': 'off',
		'testing-library/no-await-sync-events': 'off',
		'testing-library/no-await-sync-query': 'off',
		'testing-library/no-container': 'off',
		'testing-library/no-debugging-utils': 'off',
		'testing-library/no-dom-import': 'off',
		'testing-library/no-global-regexp-flag-in-query': 'off',
		'testing-library/no-manual-cleanup': 'off',
		'testing-library/no-node-access': 'off',
		'testing-library/no-promise-in-fire-event': 'off',
		'testing-library/no-render-in-setup': 'off',
		'testing-library/no-unnecessary-act': 'off',
		'testing-library/no-wait-for-empty-callback': 'off',
		'testing-library/no-wait-for-multiple-assertions': 'off',
		'testing-library/no-wait-for-side-effects': 'off',
		'testing-library/no-wait-for-snapshot': 'off',
		'testing-library/prefer-explicit-assert': 'off',
		'testing-library/prefer-find-by': 'off',
		'testing-library/prefer-presence-queries': 'off',
		'testing-library/prefer-query-by-disappearance': 'off',
		'testing-library/prefer-screen-queries': 'off',
		'testing-library/prefer-user-event': 'off',
		'testing-library/prefer-wait-for': 'off',
		'testing-library/render-result-naming-convention': 'off',
	},
};
