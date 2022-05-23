'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:node/recommended-module'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {},
};
