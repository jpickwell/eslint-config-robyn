'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [
		require.resolve('./configs/node'),
		require.resolve('./configs/commonjs'),
	],
	root: true,
};
