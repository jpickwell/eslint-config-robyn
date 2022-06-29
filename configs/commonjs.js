'use strict';

const { override } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		override(['js', 'jsx'], {
			extends: [require.resolve('./script')],
		}),
	],
};
