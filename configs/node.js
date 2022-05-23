'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:node/recommended'],
	rules: {
		'node/callback-return': 'error',
		'node/exports-style': [
			'error',
			'module.exports',
			{
				allowBatchAssign: true,
			},
		],
		'node/file-extension-in-import': 'error',
		'node/global-require': 'error',
		'node/handle-callback-err': ['error', 'error'],
		'node/no-callback-literal': 'error',
		'node/no-mixed-requires': 'error',
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',
		'node/no-process-env': 'error',
		'node/no-process-exit': 'error',
		'node/no-restricted-import': 'off',
		'node/no-restricted-require': 'off',
		'node/no-sync': 'error',
		'node/prefer-global/buffer': 'error',
		'node/prefer-global/console': 'error',
		'node/prefer-global/process': 'error',
		'node/prefer-global/text-decoder': 'error',
		'node/prefer-global/text-encoder': 'error',
		'node/prefer-global/url': 'error',
		'node/prefer-global/url-search-params': 'error',
		'node/prefer-promises/dns': 'error',
		'node/prefer-promises/fs': 'error',
	},
};
