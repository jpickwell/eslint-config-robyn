module.exports = {
  /**
   * @param {string[]} extensions
   * @returns {string[]}
   */
  mapExtensions(extensions) {
    return extensions.map((ext) => `*${ext}`);
  },

  /**
   * @param {?string[]} fileNames
   * @param {function(string, number, string[]): boolean} [filter]
   * @returns {string[]}
   */
  mapFileNames(fileNames, filter) {
    if (!fileNames) {
      return [];
    }

    if (!filter) {
      return fileNames;
    }

    return fileNames.filter((element, index, array) =>
      filter(element, index, array),
    );
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
      const fileNames = this.mapFileNames(language.filenames, fileNamesFilter);

      files = [...files, ...extensions, ...fileNames];
    }

    return files;
  },
};
