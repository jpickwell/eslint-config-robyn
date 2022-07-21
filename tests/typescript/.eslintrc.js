'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [
		require.resolve('../../configs/typescript/index.js'),
		require.resolve('../../configs/commonjs.js'),
	],
	root: true,
};

module.exports = config;
