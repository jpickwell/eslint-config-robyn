'use strict';

const filter = require(`lodash/filter`);
const flatMap = require(`lodash/flatMap`);
const isString = require(`lodash/isString`);
const map = require(`lodash/map`);
const readPkgUp = require(`read-pkg-up`);

/** @typedef {import('eslint').BaseConfig} */
/** @typedef {import('eslint').ConfigOverride} */

/** @typedef {{
 *  	directories: string[]|undefined,
 *  	extensions: string[],
 *  }} OverrideExtension */

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
				directories = [``, `**`],
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
							const prefix = directory ? `${directory}/` : ``;

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
							const prefix = directory ? `${directory}/` : ``;

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

module.exports = {
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

	nodeVersion: getPackageJson().engines?.node ?? `>= 16`,
	override,

	/**
	 * @param {BaseConfig} options
	 * @returns {ConfigOverride}
	 */
	typescriptOverride(options) {
		return override([`ts?(x)`, `[cm]ts`], options);
	},
};
