'use strict';

const haml = require('linguist-languages/data/Haml.json');
const htmlPhp = require('linguist-languages/data/HTML+PHP.json');
const opal = require('linguist-languages/data/Opal.json');
const php = require('linguist-languages/data/PHP.json');
const ruby = require('linguist-languages/data/Ruby.json');
const svg = require('linguist-languages/data/SVG.json');
const xml = require('linguist-languages/data/XML.json');
const yaml = require('linguist-languages/data/YAML.json');
const { mapFiles } = require('./lib/helpers');

const POSIX = 1;

module.exports = {
	arrowParens: 'always',
	binaryNextLine: true,
	braceStyle: 'psr-2',
	bracketSpacing: true,
	database: 'postgresql',
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	formatter: 'sql-formatter',
	functionNextLine: false,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	keepComments: true,
	keepPadding: false,
	language: 'sql',
	linesBetweenQueries: 2,
	minify: false,
	overrides: [
		// Haml
		{
			files: mapFiles(haml),
			options: {
				parser: 'haml',
			},
		},

		// PHP
		{
			excludeFiles: ['*.blade.php'],
			files: [...mapFiles([htmlPhp, php]), 'artisan'],
			options: {
				parser: 'php',
				singleQuote: false,
			},
		},

		// RBS
		{
			files: ['*.rbs'],
			options: {
				parser: 'rbs',
			},
		},

		// Ruby
		{
			files: [
				...mapFiles([opal, ruby]),
				'*.arb',
				'*.axlsx',
				'*.gemfile',
				'*.jb',
				'Cheffile',
				'Vagabondfile',
			],
			options: {
				parser: 'ruby',
			},
		},

		// XML
		{
			excludeFiles: ['*.ts', '*.tsx'],
			files: mapFiles([xml, svg]),
			options: {
				parser: 'xml',
			},
		},

		// YAML
		{
			files: mapFiles(yaml, (fileName) => fileName !== 'yarn.lock'),
			options: {
				parser: 'yaml',
				singleQuote: false,
			},
		},
	],
	phpVersion: '8.1',
	plugins: [
		'@prettier/plugin-php',
		'@prettier/plugin-ruby',
		'@prettier/plugin-xml',
		'prettier-plugin-pkg',
		'prettier-plugin-sh',
		'prettier-plugin-sql',
	],
	printWidth: 80,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleQuote: true,
	spaceRedirects: true,
	switchCaseIndent: true,
	tabWidth: 4,
	trailingComma: 'all',
	trailingCommaPHP: true,
	type: 'table',
	uppercase: false,
	useTabs: true,
	variant: POSIX,
	vueIndentScriptAndStyle: false,
	xmlSelfClosingSpace: true,
	xmlWhitespaceSensitivity: 'strict',
};
