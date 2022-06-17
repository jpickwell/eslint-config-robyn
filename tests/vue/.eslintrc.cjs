'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [require.resolve('../../vue.cjs')],
	root: true,
};
