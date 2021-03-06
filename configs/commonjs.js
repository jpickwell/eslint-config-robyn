'use strict';

const { override } = require('../lib/helpers');

/** @type {import('eslint').BaseConfig} */
const config = {
	overrides: [
		override(['js', 'jsx'], {
			extends: [require.resolve('./base-configs/script.js')],
		}),
	],
};

module.exports = config;
