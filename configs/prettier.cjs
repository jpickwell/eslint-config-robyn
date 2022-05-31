'use strict';

const prettierConfig = require('eslint-config-prettier');
const pickBy = require('lodash/pickBy');
const { override } = require('../lib/helpers.cjs');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:prettier/recommended'],
	overrides: [
		override(['ts?(x)'], {
			rules: {
				...pickBy(
					prettierConfig.rules,
					/**
					 * @param {*} value
					 * @param {string} key
					 * @returns {boolean}
					 */
					(value, key) => key.startsWith('@typescript-eslint/'),
				),
			},
		}),
	],
};
