/* eslint-disable no-console,node/no-process-exit,unicorn/no-process-exit -- CLI script */

'use strict';

const path = require('path');

const parentDirectoryOfPackage = path.basename(
  path.resolve(path.join(__dirname, '..', '..')),
);

const isDependency = parentDirectoryOfPackage === 'node_modules';

console.log(parentDirectoryOfPackage);

process.exit(isDependency ? 0 : 1);
