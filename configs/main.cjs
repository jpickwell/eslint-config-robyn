'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	env: {
		'shared-node-browser': true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
	reportUnusedDisableDirectives: true,
};
