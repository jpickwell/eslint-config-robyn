'use strict';

const allExtensions = [
	'.ts',
	'.tsx',
	'.js',
	'.jsx',
	'.cts',
	'.mts',
	'.cjs',
	'.mjs',
];

const restrictedImports = [
	'colors',
	'domain',
	'error',
	'freelist',
	'punycode',
	'querystring',
	'smalloc',
	'sys',
];

const restrictedSyntax = [
	'ContinueStatement',
	'DebuggerStatement',
	'SequenceExpression',
];

const warningCommentTerms = ['fixme', 'hack', 'optimize', 'todo', 'xxx'];

const lists = {
	allExtensions,
	restrictedImports,
	restrictedSyntax,
	warningCommentTerms,
};

module.exports = lists;
