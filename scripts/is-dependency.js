#!/usr/bin/env node

'use strict';

const path = require('node:path');
const process = require('node:process');

const pkg = require('../package.json');

const parentDirectory = path.basename(path.resolve(__dirname, '..'));

const parentDirectoryOfPackage = path.basename(
	path.resolve(parentDirectory, '..'),
);

const isDependency =
	parentDirectory !== pkg.name || parentDirectoryOfPackage === 'node_modules';

process.exitCode = isDependency ? 0 : 1;
