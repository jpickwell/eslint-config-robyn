'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:lodash/recommended'],
	rules: {
		'lodash/prefer-lodash-method': [
			'error',
			{
				ignoreMethods: [
					'assign',
					'bind',
					'concat',
					'detect',
					'drop(Right)?',
					'endsWith',
					'entries',
					'extendOwn',
					'fill',
					'first',
					'indexOf',
					'is(Array|Finite|Integer|NaN|Null|Undefined)',
					'join',
					'keys',
					'last(IndexOf)?',
					'pad(End|Start)',
					'pairs',
					'repeat',
					'replace',
					'reverse',
					'slice',
					'split',
					'startsWith',
					'to(Lower|Pairs|Upper)',
					'trim',
					'uniq',
					'values',
				],
			},
		],
	},
};
