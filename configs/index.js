'use strict';

const { mapConfigs } = require('../lib/helpers');

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
		'module/config',
	),
};
