/* eslint-disable import/no-dynamic-require, no-console, security/detect-non-literal-require -- not an issue */
'use strict';

const path = require('path');
const glob = require('glob');
const compact = require('lodash/compact');
const filter = require('lodash/filter');
const flatMap = require('lodash/flatMap');
const flow = require('lodash/flow');
const map = require('lodash/map');

/** @typedef {import('eslint').BaseConfig} */
/** @typedef {import('eslint').ConfigOverride} */
/** @typedef {import('eslint').RuleEntry} */
/** @typedef {import('eslint').RulesRecord} */

const configsDirectory = path.dirname(require.resolve('../configs'));
const configFilePaths = glob.sync(`${configsDirectory}/**/*.js`);

/**
 * @param {string} configFilePath
 * @returns {BaseConfig}
 */
function mapConfigFile(configFilePath) {
	// eslint-disable-next-line node/global-require -- not an issue
	const config = require(configFilePath);

	config.path = configFilePath;

	return config;
}

/** @type {BaseConfig[]} */
const configs = map(configFilePaths, mapConfigFile);

/**
 * @param {BaseConfig[]} cfgs
 * @returns {(BaseConfig|ConfigOverride)[]}
 */
const mappedConfigs = flatMap(
	/**
	 * @param {BaseConfig} config
	 * @returns {(BaseConfig|ConfigOverride)[]}
	 */
	(config) => {
		/** @type {(BaseConfig|ConfigOverride)[]} */
		const overrides = [config];

		if (config.overrides) {
			overrides.push(...config.overrides);
		}

		return overrides;
	},
);

/**
 * @param {(BaseConfig|ConfigOverride)[]} cfgs
 * @returns {(BaseConfig|ConfigOverride)[]}
 */
function configsWithRules(cfgs) {
	return filter(cfgs, 'rules');
}

/**
 * @param {(BaseConfig|ConfigOverride)[]} cfgs
 * @returns {((string|string[])[]|undefined)[]}
 */
function unsetRules(cfgs) {
	return map(cfgs, (config) => {
		/** @type {string[]} */
		const filteredRules = compact(
			map(
				Object.entries(config.rules),
				/**
				 * @param {string} key
				 * @param {RuleEntry|number} value
				 * @returns {string|undefined}
				 */
				([key, value]) => (value === 0 ? key : undefined),
			),
		);

		return filteredRules.length > 0
			? [
					config.files ||
						config.path.replace(`${configsDirectory}/`, ''),
					filteredRules.sort(),
			  ]
			: undefined;
	});
}

const rules = flow(
	mappedConfigs,
	configsWithRules,
	unsetRules,
	compact,
)(configs);

if (rules.length > 0) {
	console.log(rules);

	process.exitCode = 1;
}
