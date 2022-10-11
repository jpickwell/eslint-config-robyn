'use strict';

const { override } = require('./lib/helpers');

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [require.resolve('./configs/node.js'), require.resolve('./configs/commonjs.js')],
	overrides: [
		override(['ts'], {
			extends: [require.resolve('./configs/typescript/index.js')],
		}),
	],
	root: true,
};

module.exports = config;
