'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [
		require.resolve('./base-configs/index.js'),
		require.resolve('./base-configs/browser.js'),
		require.resolve('./base-configs/vue.js'),
	],
};

module.exports = config;
