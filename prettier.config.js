const helpers = require('./helpers.js');

const POSIX = 1;

module.exports = {
  plugins: [
    '@prettier/plugin-php',
    'prettier-plugin-pkg',
    '@prettier/plugin-ruby',
    'prettier-plugin-sh',
    'prettier-plugin-sql',
    '@prettier/plugin-xml',
  ],

  arrowParens: 'always',
  binaryNextLine: true,
  braceStyle: 'psr-2',
  bracketSpacing: true,
  database: 'postgresql',
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  formatter: 'sql-formatter',
  functionNextLine: false,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  keepComments: true,
  keepPadding: false,
  language: 'sql',
  linesBetweenQueries: 2,
  minify: false,
  phpVersion: '8.0',
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  rubyArrayLiteral: true,
  rubyHashLabel: true,
  rubyModifier: true,
  rubyNetcatCommand: '',
  rubySingleQuote: false,
  rubyToProc: false,
  semi: true,
  singleQuote: true,
  spaceRedirects: true,
  switchCaseIndent: true,
  tabWidth: 2,
  trailingComma: 'all',
  trailingCommaPHP: true,
  type: 'table',
  uppercase: false,
  useTabs: false,
  variant: POSIX,
  vueIndentScriptAndStyle: false,
  xmlSelfClosingSpace: true,
  xmlWhitespaceSensitivity: 'strict',

  overrides: [
    // Haml
    {
      files: helpers.mapFiles(require('linguist-languages/data/Haml.json')),
      options: {
        parser: 'haml',
      },
    },

    // PHP
    {
      files: helpers.mapFiles([
        require('linguist-languages/data/HTML+PHP.json'),
        require('linguist-languages/data/PHP.json'),
      ]),
      excludeFiles: ['*.blade.php'],
      options: {
        parser: 'php',
        singleQuote: false,
        tabWidth: 4,
      },
    },

    // RBS
    {
      files: ['*.rbs'],
      options: {
        parser: 'rbs',
      },
    },

    // Ruby
    {
      files: [
        ...helpers.mapFiles([
          require('linguist-languages/data/Opal.json'),
          require('linguist-languages/data/Ruby.json'),
        ]),
        '*.arb',
        '*.axlsx',
        '*.gemfile',
        '*.jb',
        'Cheffile',
        'Vagabondfile',
      ],
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
