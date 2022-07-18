'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [
		require.resolve('./configs/node'),
		require.resolve('./configs/commonjs'),
	],
	root: true,
};

module.exports = config;
