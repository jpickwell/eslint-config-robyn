#!/usr/bin/env node

'use strict';

const process = require('node:process');

const { rules: prettierConfigRules } = require('eslint-config-prettier');
const {
	configs: {
		recommended: { rules: prettierPluginRules },
	},
} = require('eslint-plugin-prettier');
const intersection = require('lodash/intersection');
const merge = require('lodash/merge');
const omitBy = require('lodash/omitBy');

const {
	asyncRunAsSync,
	getEnabledRules,
	loadConfig,
} = require('../lib/dev-helpers');

async function run() {
	console.log('Checking for Prettier incompatible rules...');

	const prettierRules = [
		...Object.keys(
			omitBy(
				merge(prettierPluginRules, prettierConfigRules),
				(value, key) =>
					key === 'prettier/prettier' ||
					(Array.isArray(value) ? value[0] : value) === 0,
			),
		),
		'lines-around-comment',
		'max-len',
		'no-mixed-operators',
		'no-tabs',
		'no-unexpected-multiline',
		'vue/max-len',
	].sort();

	const ruleFinder = await loadConfig(require.resolve('../configs/vue.js'));
	const setRules = ruleFinder.getCurrentRulesDetailed();
	const enabledRules = getEnabledRules(setRules);
	const enabledIncompatibleRules = intersection(enabledRules, prettierRules);
	const result = enabledIncompatibleRules.length > 0;

	if (result) {
		console.log(
			'Enabled Prettier incompatible rules:',
			enabledIncompatibleRules.sort(),
		);
	}

	console.log('');

	process.exitCode = result ? 1 : 0;
}

asyncRunAsSync(run);
