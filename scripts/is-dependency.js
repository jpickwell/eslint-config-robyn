/* eslint-disable node/no-process-exit,unicorn/no-process-exit -- CLI script */

'use strict';

const path = require('path');

const isDependency =
  path.basename(path.resolve(__dirname, '..', '..')) === 'node_modules';

process.exit(isDependency ? 0 : 1);
