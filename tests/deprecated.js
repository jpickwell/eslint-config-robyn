'use strict';

const getRuleFinder = require('eslint-find-rules');
const without = require('lodash/without');
const sp = require('synchronized-promise');
const deprecatedConfig = require('../configs/deprecated');

async function run() {
	const ruleFinder = await getRuleFinder(
		require.resolve('../configs/all.js'),
	);

	/** @type {string[]} */
	const deprecatedRules = ruleFinder.getDeprecatedRules();

	/** @type {string[]} */
	const specifiedRules = [...Object.keys(deprecatedConfig.rules)];

	const rules = without(deprecatedRules, ...specifiedRules);

	if (rules.length > 0) {
		// eslint-disable-next-line no-console -- This is a script for development purposes.
		console.log(rules);

		process.exitCode = 1;
	}
}

sp(run)();
