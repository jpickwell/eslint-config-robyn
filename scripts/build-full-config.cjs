#!/usr/bin/env node

'use strict';

const fs = require('fs/promises');
const path = require('path');
const reduce = require('lodash/reduce');
const { asyncRunAsSync, loadConfig } = require('../lib/dev-helpers.cjs');

async function build() {
	const ruleFinder = await loadConfig(require.resolve('../configs/vue.cjs'));

	const allAvailableRules = ruleFinder.getAllAvailableRules();

	const rules = reduce(
		allAvailableRules,
		(acc, value) => {
			// eslint-disable-next-line security/detect-object-injection
			acc[value] = 'error';

			return acc;
		},
		{},
	);

	const config = {
		extends: ['../configs/vue.cjs'],
		rules,
	};
	const configFilePath = path.resolve(__dirname, '../tests/full-config.json');

	// eslint-disable-next-line security/detect-non-literal-fs-filename
	await fs.writeFile(configFilePath, JSON.stringify(config));

	console.log(`Full config built and written to '${configFilePath}'.`);
}

asyncRunAsSync(build);
