#!/usr/bin/env node

'use strict';

const path = require('node:path');
const process = require('node:process');

const pkg = require('../package.json');

console.log('pkg.name:', pkg.name);

const parentDirectory = path.basename(path.resolve(__dirname, '..'));

console.log('parentDirectory:', parentDirectory);

const parentDirectoryOfPackage = path.basename(
	path.resolve(parentDirectory, '..'),
);

console.log('parentDirectoryOfPackage:', parentDirectoryOfPackage);

const isDependency =
	parentDirectory !== pkg.name || parentDirectoryOfPackage === 'node_modules';

process.exitCode = isDependency ? 0 : 1;
