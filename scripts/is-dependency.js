'use strict';

const path = require('node:path');
const process = require('node:process');

const pkg = require('../package.json');

const parentDirectory = path.resolve(__dirname, '..');
const parentDirectoryName = path.basename(parentDirectory);

const parentDirectoryNameOfPackage = path.basename(
	path.resolve(parentDirectory, '..'),
);

console.log('pkg.name:', pkg.name);
console.log('parentDirectory:', parentDirectory);
console.log('parentDirectoryName:', parentDirectoryName);
console.log('parentDirectoryNameOfPackage:', parentDirectoryNameOfPackage);

const isDependency =
	parentDirectoryName !== pkg.name ||
	parentDirectoryNameOfPackage === 'node_modules';

process.exitCode = isDependency ? 0 : 1;
