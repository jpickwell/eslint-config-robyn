'use strict';

module.exports = {
	initDeclarations: [
		'error',
		'never',
		{
			ignoreForLoopInit: true,
		},
	],
	noShadow: [
		'error',
		{
			builtinGlobals: true,
			hoist: 'all',
		},
	],
	noUseBeforeDefine: [
		'error',
		{
			functions: false,
			variables: false,
		},
	],
	paddingLineBetweenStatements: [
		'error',
		{
			blankLine: 'always',
			next: 'return',
			prev: '*',
		},
		{
			blankLine: 'always',
			next: '*',
			prev: ['const', 'let', 'var'],
		},
		{
			blankLine: 'any',
			next: ['const', 'let', 'var'],
			prev: ['const', 'let', 'var'],
		},
		{
			blankLine: 'always',
			next: '*',
			prev: 'directive',
		},
		{
			blankLine: 'any',
			next: 'directive',
			prev: 'directive',
		},
	],
	quotes: [
		'error',
		'single',
		{
			avoidEscape: true,
		},
	],
};
