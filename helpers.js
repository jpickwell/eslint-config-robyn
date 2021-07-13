const filter = require('lodash/filter');
const map = require('lodash/map');

module.exports = {
  /**
   * @param {string[]} extensions
   * @returns {string[]}
   */
  mapExtensions(extensions) {
    return map(extensions, (extension) => `*${extension}`);
  },

  /**
   * @param {object[]|object} languages
   * @param {function(string, number, string[]): boolean} [fileNamesFilter]
   * @returns {string[]}
   */
  mapFiles(languages, fileNamesFilter) {
    /** @var {string[]} */
    let files;

    const languageArray = Array.isArray(languages) ? languages : [languages];

    files = [];
    for (const language of languageArray) {
      const extensions = this.mapExtensions(language.extensions);
      const fileNames = language.filenames || [];

      files = [...files, ...extensions, ...fileNames];

      if (fileNamesFilter) {
        files = filter(files, (element, index, array) =>
          fileNamesFilter(element, index, array),
        );
      }
    }

    return files;
  },
};
