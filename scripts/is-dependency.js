'use strict';

const path = require('node:path');
const process = require('node:process');

const pkg = require('../package.json');

const parentDirectory = path.resolve(__dirname, '..');
const parentDirectoryName = path.basename(parentDirectory);

const parentDirectoryNameOfPackage = path.basename(
	path.resolve(parentDirectory, '..'),
);

const isDependency =
	parentDirectoryName !== pkg.name ||
	parentDirectoryNameOfPackage === 'node_modules';

process.exitCode = isDependency ? 0 : 1;
