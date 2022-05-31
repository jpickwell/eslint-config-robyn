'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:node/recommended-script'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'import/no-commonjs': 'off',
		'unicorn/prefer-module': 'off',
	},
};
