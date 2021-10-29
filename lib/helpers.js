'use strict';

const flatMap = require('lodash/fp/flatMap');
const readPkgUp = require('read-pkg-up');

/** @typedef {import('eslint').BaseConfig} */
/** @typedef {import('eslint').ConfigOverride} */

/** @typedef {{
 *    directories: string[]|undefined,
 *    extensions: string[],
 *  }} OverrideExtension */

/**
 * @param {string[]} deprecatedRules
 * @returns {Object<string, string>}
 */
function disableRules(deprecatedRules) {
  return Object.fromEntries(deprecatedRules.map((rule) => [rule, 'off']));
}

/**
 * @param {string[]} extensions
 * @returns {string[]}
 */
function mapExtensions(extensions) {
  return extensions.map(
    /**
     * @param {string} extension
     * @returns {string}
     */
    (extension) => `*${extension}`,
  );
}

module.exports = Object.freeze({
  disableRules,

  /**
   * @returns {readPkgUp.NormalizedPackageJson|undefined}
   */
  getPackageJson() {
    const {
      /** @type {readPkgUp.NormalizedPackageJson|undefined} */
      packageJson,
    } = readPkgUp.sync({ normalize: true }) || {};

    return packageJson;
  },

  /**
   * @param {...string} configs
   * @returns {string[]}
   */
  mapConfigs(...configs) {
    return configs.map(
      /**
       * @param {string} config
       * @returns {string}
       */
      (config) => require.resolve(`../configs/${config}.js`),
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

    const languageArray = Array.isArray(languages) ? languages : [languages];

    files = [];
    for (const language of languageArray) {
      const extensions = mapExtensions(language.extensions);
      const fileNames = language.filenames || [];

      files = [...files, ...extensions, ...fileNames];

      if (fileNamesFilter) {
        files = files.filter(fileNamesFilter);
      }
    }

    return files;
  },

  /**
   * @param {(string|OverrideExtension)[]} overrideExtensions
   * @param {BaseConfig} options
   * @returns {ConfigOverride}
   */
  override(overrideExtensions, options) {
    /** @type {string[]} */
    const files = flatMap(
      /**
       * @param {string|OverrideExtension} overrideExtension
       * @returns {string[]}
       */
      (overrideExtension) => {
        const overrideExtensionObject =
          typeof overrideExtension.valueOf() === 'string'
            ? { extensions: [overrideExtension] }
            : overrideExtension;

        const { extensions, directories = ['', '**'] } =
          overrideExtensionObject;

        return flatMap(
          /**
           * @param {string} directory
           * @returns {string[]}
           */
          (directory) =>
            flatMap(
              /**
               * @param {string} extension
               * @returns {string[]}
               */
              (extension) => {
                const prefix = directory ? `${directory}/` : '';

                return extension.startsWith('.')
                  ? [`${prefix}${extension}`]
                  : [`${prefix}.*.${extension}`, `${prefix}*.${extension}`];
              },
              extensions,
            ),
          directories,
        );
      },
      overrideExtensions,
    );

    return {
      files,
      ...options,
    };
  },
});
