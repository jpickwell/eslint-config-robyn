'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
	},
	rules: {
		/**********************************************************************
		 * @TYPESCRIPT-ESLINT
		 **********************************************************************/

		'@typescript-eslint/explicit-function-return-type': 'off',

		/**********************************************************************
		 * IMPORT
		 **********************************************************************/

		'import/extensions': 'off',

		/**********************************************************************
		 * VUE
		 **********************************************************************/

		'vue/block-lang': [
			'error',
			{
				script: {
					allowNoLang: false,
					lang: ['ts'],
				},
			},
		],
	},
};

module.exports = config;
