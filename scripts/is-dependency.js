/* eslint-disable node/no-process-exit,unicorn/no-process-exit -- CLI script */

'use strict';

const path = require('path');
const pkg = require('../package.json');

const parentDirectory = path.basename(path.resolve(__dirname, '..'));

const parentDirectoryOfPackage = path.basename(
  path.resolve(parentDirectory, '..'),
);

const isDependency =
  parentDirectory !== pkg.name || parentDirectoryOfPackage === 'node_modules';

process.exit(isDependency ? 0 : 1);
