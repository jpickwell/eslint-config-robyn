'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [require.resolve('../../configs/vue.cjs')],
	root: true,
};
