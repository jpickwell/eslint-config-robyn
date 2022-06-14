'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [require.resolve('../index.cjs')],
	rules: {
		'no-console': 'off',

		// eslint-disable-next-line sort-keys
		'n/no-unpublished-require': 'off',
		'n/shebang': 'off',
	},
};
