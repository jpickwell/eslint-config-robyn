'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: [require.resolve('./configs/node.cjs')],
	root: true,
};
