'use strict';

const getRuleFinder = require('eslint-find-rules');
const without = require('lodash/fp/without');
const deprecatedConfig = require('../configs/deprecated');

const ruleFinder = getRuleFinder(require.resolve('../configs/all.js'));

/** @type {string[]} */
const deprecatedRules = ruleFinder.getDeprecatedRules();

/** @type {string[]} */
const specifiedRules = [...Object.keys(deprecatedConfig.rules)];

const rules = without(specifiedRules, deprecatedRules);

if (rules.length > 0) {
  // eslint-disable-next-line no-console -- This is a script for development purposes.
  console.log(rules);

  process.exitCode = 1;
}
