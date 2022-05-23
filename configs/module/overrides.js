'use strict';

const { override } = require('../../lib/helpers');
const config = require('./config');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [override(['mjs'], config)],
};
