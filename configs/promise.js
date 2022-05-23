'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:promise/recommended'],
	rules: {
		'promise/avoid-new': 'error',
		'promise/catch-or-return': [
			'error',
			{
				allowFinally: true,
			},
		],
		'promise/no-callback-in-promise': 'error',
		'promise/no-nesting': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/prefer-await-to-callbacks': 'error',
		'promise/prefer-await-to-then': 'error',
		'promise/valid-params': 'error',
	},
};
