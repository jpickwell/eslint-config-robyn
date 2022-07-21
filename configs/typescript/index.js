'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [
		require.resolve('../base-configs/index.js'),
		require.resolve('../base-configs/typescript/index.js'),
	],
};

module.exports = config;
