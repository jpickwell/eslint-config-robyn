'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [
		require.resolve('../../configs/vue'),
		require.resolve('../../configs/commonjs'),
	],
	root: true,
};

module.exports = config;
