'use strict';

const fs = require('fs');
const path = require('path');
const { override } = require('./lib/helpers');

// eslint-disable-next-line node/no-sync -- not an issue
const tsconfig = fs.existsSync('tsconfig.json')
	? path.resolve('tsconfig.json')
	: fs.existsSync('types/tsconfig.json') // eslint-disable-line node/no-sync -- not an issue
	? path.resolve('types/tsconfig.json')
	: undefined;

const tsconfigRootDir = tsconfig ? path.dirname(tsconfig) : __dirname;

module.exports = {
	overrides: [
		override(['ts?(x)'], {
			extends: [
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir,
			},
		}),
	],
};
