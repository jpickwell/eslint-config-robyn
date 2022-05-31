'use strict';

const { override } = require('../../lib/helpers.cjs');
const config = require('./config.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		override([{ extensions: ['cjs'], files: ['.eslint.js'] }], config),
	],
};
