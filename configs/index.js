'use strict';

const { mapConfigs } = require('../lib/helpers');

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
  extends: mapConfigs(
    'deprecated',
    'main',
    'core',
    'eslint-comments',
    'fp',
    'import',
    'lodash-fp',
    'markdown',
    'module/overrides',
    'node',
    'prettier',
    'promise',
    'script/overrides',
    'security',
    'simple-import-sort',
    'typescript',
    'unicorn',
    'you-dont-need-lodash-underscore',
    'module/config',
  ),
};
