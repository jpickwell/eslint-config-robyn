'use strict';

const { override } = require('../../lib/helpers');

/** @type {import('eslint').BaseConfig} */
const config = {
	overrides: [
		override(
			[
				{
					extensions: ['cjs'],
					files: [
						'.commitlintrc.js',
						'.eslintrc.js',
						'.postcssrc.js',
						'.prettierrc.js',
						'.stylelintrc.js',
						'.versionrc.js',
						'commitlint.config.js',
						'lint-staged.config.js',
						'postcss.config.js',
						'prettier.config.js',
						'stylelint.config.js',
						'tailwind.config.js',
					],
				},
			],
			{
				extends: [require.resolve('./script.js')],
			},
		),
		override(
			[
				{
					files: [
						'.commitlintrc.cjs',
						'.commitlintrc.js',
						'.commitlintrc.ts',
						'.eslintrc.cjs',
						'.eslintrc.js',
						'.postcssrc.cjs',
						'.postcssrc.js',
						'.postcssrc.mjs',
						'.postcssrc.ts',
						'.prettierrc.cjs',
						'.prettierrc.js',
						'.stylelintrc.cjs',
						'.stylelintrc.js',
						'.versionrc.cjs',
						'.versionrc.js',
						'commitlint.config.cjs',
						'commitlint.config.js',
						'commitlint.config.ts',
						'lint-staged.config.cjs',
						'lint-staged.config.js',
						'lint-staged.config.mjs',
						'postcss.config.cjs',
						'postcss.config.js',
						'postcss.config.mjs',
						'postcss.config.ts',
						'prettier.config.cjs',
						'prettier.config.js',
						'stylelint.config.cjs',
						'stylelint.config.js',
						'tailwind.config.js',
						'vite.config.js',
						'vite.config.ts',
					],
				},
			],
			{
				rules: {
					/**********************************************************
					 * N[ODE]
					 **********************************************************/

					'n/no-unpublished-require': 'off',
				},
			},
		),
		override(['mjs'], {
			extends: [require.resolve('./module.js')],
		}),
	],
};

module.exports = config;
