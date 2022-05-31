'use strict';

const { mapConfigs } = require('../lib/helpers.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: mapConfigs(
		'index',
		'jest',
		'jest-dom',
		'jest-formatting',
		'testing-library',
		'vue',
	),
};
