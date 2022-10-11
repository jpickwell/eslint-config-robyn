#!/usr/bin/env node

'use strict';

const process = require('node:process');

const intersection = require('lodash/intersection');
const without = require('lodash/without');

const deprecatedConfig = require('../configs/base-configs/deprecated');
const { asyncRunAsSync, getEnabledRules, loadConfig } = require('../lib/dev-helpers');

async function getDeprecatedRules() {
	const ruleFinder = await loadConfig(require.resolve('./full-config.json'));

	return ruleFinder.getDeprecatedRules();
}

function getSpecifiedDeprecatedRules() {
	return [...Object.keys(deprecatedConfig.rules)];
}

/**
 * @param {string[]} deprecatedRules
 */
function anyMissingDeprecatedRules(deprecatedRules) {
	/** @type {string[]} */
	const specifiedDeprecatedRules = getSpecifiedDeprecatedRules();

	const missingRules = without(deprecatedRules, ...specifiedDeprecatedRules);
	const unnecessaryRules = without(specifiedDeprecatedRules, ...deprecatedRules);
	const result = missingRules.length > 0;

	if (result) {
		console.log('Missing deprecated rules:', missingRules);
	}

	if (unnecessaryRules.length > 0) {
		console.warn('Unnecessarily specified deprecated rules:', unnecessaryRules);
	}

	return result;
}

/**
 * @param {Record<string, array>} setRules
 * @param {string[]} deprecatedRules
 */
function anyEnabledDeprecatedRules(setRules, deprecatedRules) {
	const enabledRules = getEnabledRules(setRules);
	const enabledDeprecatedRules = intersection(enabledRules, deprecatedRules);
	const result = enabledDeprecatedRules.length > 0;

	if (result) {
		console.log('Enabled deprecated rules:', enabledDeprecatedRules.sort());
	}

	return result;
}

async function run() {
	console.log('Checking for deprecated rules...');

	const ruleFinder = await loadConfig(require.resolve('../configs/typescript/vue.js'));

	const deprecatedRules = await getDeprecatedRules();

	process.exitCode =
		anyMissingDeprecatedRules(deprecatedRules) ||
		anyEnabledDeprecatedRules(ruleFinder.getCurrentRulesDetailed(), deprecatedRules)
			? 1
			: 0;

	console.log('');
}

asyncRunAsSync(run);
