'use strict';

const globals = require('globals');

const { buildIdentifierMatchRegExpString } = require('../lib/reg-exps');

/** @type {import('eslint').BaseConfig} */
const config = {
	env: {
		node: true,
	},
	extends: [require.resolve('.')],
	rules: {
		'id-match': [
			'error',
			buildIdentifierMatchRegExpString(Object.keys(globals.node)),
			{
				ignoreDestructuring: false,
				onlyDeclarations: true,
				properties: false,
			},
		],
	},
};

module.exports = config;
