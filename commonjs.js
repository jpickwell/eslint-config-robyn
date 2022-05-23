'use strict';

const scriptConfig = require('./configs/script/config');
const { override } = require('./lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	overrides: [override(['js?(x)'], scriptConfig)],
};
