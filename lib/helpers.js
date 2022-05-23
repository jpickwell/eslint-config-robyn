'use strict';

const compact = require('lodash/compact');
const defaults = require('lodash/defaults');
const every = require('lodash/every');
const filter = require('lodash/filter');
const flatMap = require('lodash/flatMap');
const includes = require('lodash/includes');
const isString = require('lodash/isString');
const map = require('lodash/map');
const some = require('lodash/some');
const readPkgUp = require('read-pkg-up');

/** @typedef {import('eslint').BaseConfig} */
/** @typedef {import('eslint').ConfigOverride} */

/** @typedef {{
 *  	directories: string[]|undefined,
 *  	extensions: string[],
 *  }} OverrideExtension */

/**
 * @returns {string[]}
 */
function allDependencies() {
	let deps;

	try {
		const {
			packageJson: {
				dependencies = {},
				devDependencies = {},
				peerDependencies = {},
			},
		} = getPackageJson();

		deps = [
			...new Set(
				Object.keys({
					...peerDependencies,
					...devDependencies,
					...dependencies,
				}),
			),
		];
	} catch {
		deps = [];
	}

	return deps;
}

/**
 * @param {string[]} deprecatedRules
 * @returns {Object<string, string>}
 */
function disableRules(deprecatedRules) {
	return Object.fromEntries(map(deprecatedRules, (rule) => [rule, 'off']));
}

/**
 * @returns {readPkgUp.NormalizedPackageJson|undefined}
 */
function getPackageJson() {
	const {
		/** @type {readPkgUp.NormalizedPackageJson|undefined} */
		packageJson,
	} = readPkgUp.sync({ normalize: true }) || {};

	return packageJson;
}

/**
 * @param {string[]} extensions
 * @returns {string[]}
 */
function mapExtensions(extensions) {
	return map(
		extensions,
		/**
		 * @param {string} extension
		 * @returns {string}
		 */
		(extension) => `*${extension}`,
	);
}

/**
 * @param {(string|OverrideExtension)[]} overrideExtensions
 * @param {BaseConfig} options
 * @returns {ConfigOverride}
 */
function override(overrideExtensions, options) {
	/** @type {string[]} */
	const overrideFiles = flatMap(
		overrideExtensions,
		/**
		 * @param {string|OverrideExtension} overrideExtension
		 * @returns {string[]}
		 */
		(overrideExtension) => {
			const overrideExtensionObject = isString(overrideExtension)
				? { extensions: [overrideExtension] }
				: overrideExtension;

			const {
				directories = ['', '**'],
				extensions = [],
				files = [],
			} = overrideExtensionObject;

			return flatMap(
				directories,
				/**
				 * @param {string} directory
				 * @returns {string[]}
				 */
				(directory) => [
					...flatMap(
						extensions,
						/**
						 * @param {string} extension
						 * @returns {string[]}
						 */
						(extension) => {
							const prefix = directory ? `${directory}/` : '';

							return [
								`${prefix}.*.${extension}`,
								`${prefix}*.${extension}`,
							];
						},
					),
					...map(
						files,
						/**
						 * @param {string} file
						 * @returns {string[]}
						 */
						(file) => {
							const prefix = directory ? `${directory}/` : '';

							return `${prefix}${file}`;
						},
					),
				],
			);
		},
	);

	return {
		files: overrideFiles,
		...options,
	};
}

module.exports = Object.freeze({
	allDependencies,
	disableRules,
	getPackageJson,

	/**
	 * @param {string[]} dependencies
	 * @param {{ all: boolean }} options
	 * @returns {boolean}
	 */
	hasDependencies(dependencies, options = {}) {
		const ops = defaults(options, { all: true });
		const allDeps = allDependencies();

		/**
		 * @param {string} dependency
		 */
		function predicate(dependency) {
			return includes(allDeps, dependency);
		}

		return ops.all
			? every(dependencies, predicate)
			: some(dependencies, predicate);
	},

	/**
	 * @param {...(boolean|string|undefined)} configs
	 * @returns {string[]}
	 */
	mapConfigs(...configs) {
		return compact(
			map(
				configs,
				/**
				 * @param {boolean|string|undefined} config
				 * @returns {boolean|string|undefined}
				 */
				(config) =>
					config && require.resolve(`../configs/${config}.js`),
			),
		);
	},

	mapDeprecatedRules: disableRules,
	mapExtensions,

	/**
	 * @param {Object[]|Object} languages
	 * @param {function(string, number, string[]): boolean} [fileNamesFilter]
	 * @returns {string[]}
	 */
	mapFiles(languages, fileNamesFilter) {
		/** @var {string[]} */
		let files;

		const languageArray = Array.isArray(languages)
			? languages
			: [languages];

		files = [];
		for (const language of languageArray) {
			const extensions = mapExtensions(language.extensions);
			const fileNames = language.filenames || [];

			files = [...files, ...extensions, ...fileNames];

			if (fileNamesFilter) {
				files = filter(files, fileNamesFilter);
			}
		}

		return files;
	},

	override,

	/**
	 * @param {BaseConfig} options
	 * @returns {ConfigOverride}
	 */
	testsOverride(options) {
		return override(
			[
				{
					directories: ['**/__tests__/**'],
					extensions: ['[jt]s'],
				},
				{
					extensions: ['{spec,test}.[jt]s'],
					files: ['*_{spec,test}.[jt]s', '*{Spec,Test}.[jt]s'],
				},
			],
			options,
		);
	},
});
