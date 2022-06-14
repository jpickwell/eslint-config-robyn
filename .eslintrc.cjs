'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [
		require.resolve(`./node.cjs`),
		require.resolve(`./backticks.cjs`),
	],
	root: true,
};
