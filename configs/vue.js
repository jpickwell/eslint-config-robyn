'use strict';

const find = require('lodash/find');

const { getPackageJson, override } = require('../lib/helpers');
const sharedConfigs = require('../lib/shared-configs');

// Determine the Vue.js version.
const vueVersion = (() => {
	const packageJson = getPackageJson();
	const version = find(
		{
			vue: '^3.2.0',
			...packageJson.optionalDependencies,
			...packageJson.peerDependencies,
			...packageJson.devDependencies,
			...packageJson.dependencies,
		},
		(value, key) => key === 'vue',
	);

	return version;
})();

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [require.resolve('./browser')],
	overrides: [
		override(['vue'], {
			rules: {
				'no-invalid-this': 'off',

				// eslint-disable-next-line sort-keys
				'import/unambiguous': 'off',
			},
		}),
	],
	parser: require.resolve('vue-eslint-parser'),
	parserOptions: {
		extraFileExtensions: ['.vue'],
		parser: {
			js: 'espree',
			jsx: 'espree',
			ts: require.resolve('@typescript-eslint/parser'),
			tsx: require.resolve('@typescript-eslint/parser'),
		},
	},
	plugins: ['vue'],
	rules: {
		'sort-keys': 'off',

		// eslint-disable-next-line sort-keys
		'@typescript-eslint/explicit-function-return-type': 'off',

		'vue/array-bracket-newline': sharedConfigs.arrayBracketNewline(),
		'vue/array-bracket-spacing': sharedConfigs.arrayBracketSpacing(),
		'vue/arrow-spacing': sharedConfigs.arrowSpacing(),
		'vue/attribute-hyphenation': 'error',
		'vue/attributes-order': [
			'error',
			{
				alphabetical: true,
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
			},
		],
		'vue/block-lang': [
			'error',
			{
				script: {
					allowNoLang: true,
					lang: ['js', 'ts'],
				},
				style: {
					allowNoLang: true,
					lang: ['css', 'sass', 'scss'],
				},
				template: {
					allowNoLang: true,
				},
			},
		],
		'vue/block-spacing': sharedConfigs.blockSpacing(),
		'vue/block-tag-newline': 'off',
		'vue/brace-style': sharedConfigs.braceStyle(),
		'vue/camelcase': sharedConfigs.camelcase(),
		'vue/comma-dangle': sharedConfigs.commaDangle(),
		'vue/comma-spacing': sharedConfigs.commaSpacing(),
		'vue/comma-style': sharedConfigs.commaStyle(),
		'vue/comment-directive': 'error',
		'vue/component-api-style': ['error', ['script-setup']],
		'vue/component-definition-name-casing': 'error',
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		'vue/component-options-name-casing': 'error',
		'vue/component-tags-order': [
			'error',
			{
				order: [
					'script',
					'template',
					'style[scoped]',
					'style:not([scoped])',
				],
			},
		],
		'vue/custom-event-name-casing': 'error',
		'vue/define-macros-order': 'error',
		'vue/dot-location': sharedConfigs.dotLocation(),
		'vue/dot-notation': sharedConfigs.dotNotation(),
		'vue/eqeqeq': sharedConfigs.eqeqeq(),
		'vue/first-attribute-linebreak': 'error',
		'vue/func-call-spacing': sharedConfigs.funcCallSpacing(),
		'vue/html-button-has-type': 'error',
		'vue/html-closing-bracket-newline': 'off',
		'vue/html-closing-bracket-spacing': 'off',
		'vue/html-comment-content-newline': 'error',
		'vue/html-comment-content-spacing': 'error',
		'vue/html-comment-indent': ['error', 'tab'],
		'vue/html-end-tags': 'off',
		'vue/html-indent': 'off',
		'vue/html-quotes': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'any',
				},
			},
		],
		'vue/jsx-uses-vars': 'error',
		'vue/key-spacing': sharedConfigs.keySpacing(),
		'vue/keyword-spacing': sharedConfigs.keywordSpacing(),
		'vue/match-component-file-name': 'off',
		'vue/match-component-import-name': 'error',
		'vue/max-attributes-per-line': 'off',
		'vue/max-len': sharedConfigs.maxLen(),
		'vue/multi-word-component-names': 'error',
		'vue/multiline-html-element-content-newline': 'off',
		'vue/mustache-interpolation-spacing': 'off',
		'vue/new-line-between-multi-line-property': 'error',
		'vue/next-tick-style': 'error',
		'vue/no-arrow-functions-in-watch': 'error',
		'vue/no-async-in-computed-properties': 'error',
		'vue/no-bare-strings-in-template': 'off',
		'vue/no-boolean-default': 'error',
		'vue/no-child-content': 'error',
		'vue/no-computed-properties-in-data': 'error',
		'vue/no-constant-condition': sharedConfigs.noConstantCondition(),
		'vue/no-custom-modifiers-on-v-model': 'error',
		'vue/no-deprecated-data-object-declaration': 'error',
		'vue/no-deprecated-destroyed-lifecycle': 'error',
		'vue/no-deprecated-dollar-listeners-api': 'error',
		'vue/no-deprecated-dollar-scopedslots-api': 'error',
		'vue/no-deprecated-events-api': 'error',
		'vue/no-deprecated-filter': 'error',
		'vue/no-deprecated-functional-template': 'error',
		'vue/no-deprecated-html-element-is': 'error',
		'vue/no-deprecated-inline-template': 'error',
		'vue/no-deprecated-props-default-this': 'error',
		'vue/no-deprecated-router-link-tag-prop': 'error',
		'vue/no-deprecated-scope-attribute': 'error',
		'vue/no-deprecated-slot-attribute': 'error',
		'vue/no-deprecated-slot-scope-attribute': 'error',
		'vue/no-deprecated-v-bind-sync': 'error',
		'vue/no-deprecated-v-is': 'error',
		'vue/no-deprecated-v-on-native-modifier': 'error',
		'vue/no-deprecated-v-on-number-modifiers': 'error',
		'vue/no-deprecated-vue-config-keycodes': 'error',
		'vue/no-dupe-keys': 'error',
		'vue/no-dupe-v-else-if': 'error',
		'vue/no-duplicate-attr-inheritance': 'error',
		'vue/no-duplicate-attributes': 'error',
		'vue/no-empty-component-block': 'error',
		'vue/no-empty-pattern': sharedConfigs.noEmptyPattern(),
		'vue/no-export-in-script-setup': 'error',
		'vue/no-expose-after-await': 'error',
		'vue/no-extra-parens': sharedConfigs.noExtraParens(),
		'vue/no-irregular-whitespace': sharedConfigs.noIrregularWhitespace(),
		'vue/no-lifecycle-after-await': 'error',
		'vue/no-lone-template': 'error',
		'vue/no-loss-of-precision': sharedConfigs.noLossOfPrecision(),
		'vue/no-multi-spaces': 'off',
		'vue/no-multiple-objects-in-class': 'error',
		'vue/no-multiple-slot-args': 'error',
		'vue/no-multiple-template-root': 'error',
		'vue/no-mutating-props': 'error',
		'vue/no-parsing-error': 'error',
		'vue/no-potential-component-option-typo': [
			'error',
			{
				presets: ['vue', 'vue-router'],
			},
		],
		'vue/no-ref-as-operand': 'error',
		'vue/no-reserved-component-names': 'error',
		'vue/no-reserved-keys': 'error',
		'vue/no-reserved-props': 'error',
		'vue/no-restricted-block': 'off',
		'vue/no-restricted-call-after-await': 'off',
		'vue/no-restricted-class': 'off',
		'vue/no-restricted-component-options': 'off',
		'vue/no-restricted-custom-event': 'off',
		'vue/no-restricted-html-elements': 'off',
		'vue/no-restricted-props': 'off',
		'vue/no-restricted-static-attribute': 'off',
		'vue/no-restricted-syntax': sharedConfigs.noRestrictedSyntax(),
		'vue/no-restricted-v-bind': 'off',
		'vue/no-setup-props-destructure': 'error',
		'vue/no-shared-component-data': 'error',
		'vue/no-side-effects-in-computed-properties': 'error',
		'vue/no-spaces-around-equal-signs-in-attribute': 'off',
		'vue/no-sparse-arrays': sharedConfigs.noSparseArrays(),
		'vue/no-static-inline-styles': 'error',
		'vue/no-template-key': 'error',
		'vue/no-template-shadow': 'error',
		'vue/no-template-target-blank': 'error',
		'vue/no-textarea-mustache': 'error',
		'vue/no-this-in-before-route-enter': 'error',
		'vue/no-undef-components': [
			'error',
			{
				ignorePatterns: ['^q-'],
			},
		],
		'vue/no-undef-properties': 'error',
		'vue/no-unsupported-features': [
			'error',
			{
				version: vueVersion,
			},
		],
		'vue/no-unused-components': 'error',
		'vue/no-unused-properties': [
			'error',
			{
				deepData: true,
				groups: ['computed', 'data', 'methods', 'props', 'setup'],
				ignorePublicMembers: true,
			},
		],
		'vue/no-unused-refs': 'error',
		'vue/no-unused-vars': 'error',
		'vue/no-use-computed-property-like-method': 'error',
		'vue/no-use-v-if-with-v-for': 'error',
		'vue/no-useless-concat': sharedConfigs.noUselessConcat(),
		'vue/no-useless-mustaches': 'error',
		'vue/no-useless-template-attributes': 'error',
		'vue/no-useless-v-bind': 'error',
		'vue/no-v-for-template-key': 'error',
		'vue/no-v-for-template-key-on-child': 'error',
		'vue/no-v-html': 'error',
		'vue/no-v-model-argument': 'off',
		'vue/no-v-text': 'error',
		'vue/no-v-text-v-html-on-component': 'error',
		'vue/no-watch-after-await': 'error',
		'vue/object-curly-newline': sharedConfigs.objectCurlyNewline(),
		'vue/object-curly-spacing': sharedConfigs.objectCurlySpacing(),
		'vue/object-property-newline': sharedConfigs.objectPropertyNewline(),
		'vue/object-shorthand': sharedConfigs.objectShorthand(),
		'vue/one-component-per-file': 'error',
		'vue/operator-linebreak': sharedConfigs.operatorLinebreak(),
		'vue/order-in-components': 'error',
		'vue/padding-line-between-blocks': 'error',
		'vue/prefer-import-from-vue': 'error',
		'vue/prefer-prop-type-boolean-first': 'error',
		'vue/prefer-separate-static-class': 'error',
		'vue/prefer-template': sharedConfigs.preferTemplate(),
		'vue/prefer-true-attribute-shorthand': 'error',
		'vue/prop-name-casing': 'error',
		'vue/quote-props': sharedConfigs.quoteProps(),
		'vue/require-component-is': 'error',
		'vue/require-default-prop': 'error',
		'vue/require-direct-export': 'off',
		'vue/require-emit-validator': 'error',
		'vue/require-explicit-emits': 'error',
		'vue/require-expose': 'error',
		'vue/require-name-property': 'off',
		'vue/require-prop-type-constructor': 'error',
		'vue/require-prop-types': 'error',
		'vue/require-render-return': 'error',
		'vue/require-slots-as-functions': 'error',
		'vue/require-toggle-inside-transition': 'error',
		'vue/require-v-for-key': 'error',
		'vue/require-valid-default-prop': 'error',
		'vue/return-in-computed-property': 'error',
		'vue/return-in-emits-validator': 'error',
		'vue/script-indent': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/sort-keys': sharedConfigs.sortKeys(),
		'vue/space-in-parens': sharedConfigs.spaceInParens(),
		'vue/space-infix-ops': sharedConfigs.spaceInfixOps(),
		'vue/space-unary-ops': sharedConfigs.spaceUnaryOps(),
		'vue/static-class-names-order': 'error',
		'vue/template-curly-spacing': sharedConfigs.templateCurlySpacing(),
		'vue/this-in-template': 'error',
		'vue/use-v-on-exact': 'error',
		'vue/v-bind-style': 'error',
		'vue/v-for-delimiter-style': 'error',
		'vue/v-on-event-hyphenation': 'error',
		'vue/v-on-function-call': 'error',
		'vue/v-on-style': 'error',
		'vue/v-slot-style': 'error',
		'vue/valid-attribute-name': 'error',
		'vue/valid-define-emits': 'error',
		'vue/valid-define-props': 'error',
		'vue/valid-model-definition': 'error',
		'vue/valid-next-tick': 'error',
		'vue/valid-template-root': 'error',
		'vue/valid-v-bind': 'error',
		'vue/valid-v-bind-sync': 'error',
		'vue/valid-v-cloak': 'error',
		'vue/valid-v-else': 'error',
		'vue/valid-v-else-if': 'error',
		'vue/valid-v-for': 'error',
		'vue/valid-v-html': 'error',
		'vue/valid-v-if': 'error',
		'vue/valid-v-is': 'error',
		'vue/valid-v-memo': 'error',
		'vue/valid-v-model': 'error',
		'vue/valid-v-on': 'error',
		'vue/valid-v-once': 'error',
		'vue/valid-v-pre': 'error',
		'vue/valid-v-show': 'error',
		'vue/valid-v-slot': 'error',
		'vue/valid-v-text': 'error',
	},
};

module.exports = config;
