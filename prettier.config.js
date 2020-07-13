module.exports = {
  addTrailingCommas: true,
  phpVersion: '7.4',
  preferSingleQuotes: false,
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: [
        '*.aw',
        '*.ctp',
        '*.fcgi',
        '*.inc',
        '*.php',
        '*.php3',
        '*.php4',
        '*.php5',
        '*.phps',
        '*.phpt',
        '*.phtml',
        '.php_cs',
        '.php_cs.dist',
        'artisan',
        'Phakefile',
      ],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['.simplecov'],
      options: {
        parser: 'ruby',
      },
    },
  ],
};
