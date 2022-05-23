'use strict';

const { override } = require('../../lib/helpers');
const config = require('./config');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		override([{ extensions: ['cjs'], files: ['.eslint.js'] }], config),
	],
};
