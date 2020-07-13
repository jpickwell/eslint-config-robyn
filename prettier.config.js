const helpers = require('./helpers.js');

module.exports = {
  addTrailingCommas: true,
  phpVersion: '7.4',
  preferSingleQuotes: false,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    // PHP
    {
      files: helpers.mapFiles([
        require('linguist-languages/data/PHP.json'),
        require('linguist-languages/data/HTML+PHP.json'),
      ]),
      options: {
        parser: 'php',
        singleQuote: false,
      },
    },

    // Ruby
    {
      files: helpers.mapFiles(require('linguist-languages/data/Ruby.json')),
      options: {
        parser: 'ruby',
      },
    },

    // XML
    {
      files: helpers.mapFiles([
        require('linguist-languages/data/XML.json'),
        require('linguist-languages/data/SVG.json'),
      ]),
      options: {
        parser: 'xml',
      },
    },

    // YAML
    {
      files: helpers.mapFiles(
        require('linguist-languages/data/YAML.json'),
        (fileName) => fileName !== 'yarn.lock',
      ),
      options: {
        parser: 'yaml',
        singleQuote: false,
      },
    },
  ],
};
