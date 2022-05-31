'use strict';

const { mapConfigs } = require('../lib/helpers.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: mapConfigs(
		'main',
		'core',
		'eslint-comments',
		'import',
		'lodash',
		'markdown',
		'node',
		'module/config',
		'promise',
		'security',
		'simple-import-sort',
		'typescript',
		'unicorn',
		'you-dont-need-lodash-underscore',
		'prettier',
		'deprecated',
		'module/overrides',
		'script/overrides',
	),
};
