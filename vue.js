'use strict';

const { mapConfigs } = require('./lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  extends: mapConfigs('index', 'vue', 'vue-scoped-css'),
};
