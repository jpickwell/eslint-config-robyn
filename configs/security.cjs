'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:security/recommended'],
	rules: {
		'security/detect-unsafe-regex': 'off', // false-positives and no guidance
	},
};
