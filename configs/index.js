'use strict';

/** @type {import('eslint').BaseConfig} */
const config = {
	extends: [require.resolve('./base-configs/index.js')],
};

module.exports = config;
