/* eslint-disable n/no-process-env */
'use strict';

const process = require('node:process');

const env = {
	NODE_ENV: process.env.NODE_ENV,
};

module.exports = env;
