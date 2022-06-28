#!/usr/bin/env node

'use strict';

const process = require('process');
const pickBy = require('lodash/pickBy');
const { asyncRunAsSync, loadConfig } = require('../lib/dev-helpers.cjs');

async function run() {
	const ruleFinder = await loadConfig(require.resolve('../vue.cjs'));
	const unsetRules = Object.keys(
		pickBy(ruleFinder.getCurrentRulesDetailed(), (value) => {
			const ruleSeverity = Array.isArray(value) ? value[0] : value;

			return ruleSeverity === 0;
		}),
	);

	if (unsetRules.length > 0) {
		console.log('Unset rules:', unsetRules.sort());

		process.exitCode = 1;
	}
}

asyncRunAsSync(run);
