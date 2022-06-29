'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [
		require.resolve('../../configs/vue'),
		require.resolve('../../configs/commonjs'),
	],
	root: true,
};
