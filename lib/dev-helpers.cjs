/* eslint-disable n/no-unpublished-require */
'use strict';

const getRuleFinder = require('eslint-find-rules');
const pickBy = require('lodash/pickBy');
const includes = require('lodash/includes');
const sp = require('synchronized-promise');

module.exports = {
	asyncRunAsSync(fn, ...args) {
		return sp(fn)(...args);
	},

	getEnabledRules(setRules) {
		return Object.keys(
			pickBy(setRules, (value) => {
				const ruleSeverity = Array.isArray(value) ? value[0] : value;

				return !includes([0, 'off'], ruleSeverity);
			}),
		).sort();
	},

	loadConfig(configFilePath) {
		return getRuleFinder(configFilePath, {
			ext: ['.ts'],
		});
	},
};
