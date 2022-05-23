'use strict';

const { hasDependencies, mapConfigs, testsOverride } = require('./lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

const hasJestDom = hasDependencies(['@testing-library/jest-dom']);
const hasTestingLibrary = hasDependencies(
	[
		'@testing-library/angular',
		'@testing-library/dom',
		'@testing-library/react',
		'@testing-library/vue',
	],
	{ all: false },
);

const configs = mapConfigs(
	'jest',
	'jest-formatting',
	hasJestDom && 'jest-dom',
	hasTestingLibrary && 'testing-library',
);

/** @type {BaseConfig} */
module.exports = {
	overrides: [
		testsOverride({
			extends: configs,
		}),
	],
};
