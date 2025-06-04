/*
 * NOTE: If this file is modified, then VSCode must be restarted for the changes
 * to take effect. This seems like a bug in the Prettier extension for VSCode.
 */

/** @type {import('prettier').Config} */
const config = {
	// The following options are set based on the .editorconfig:
	// - endOfLine -- end_of_line
	// - printWidth -- max_line_length
	// - tabWidth -- indent_size / tab_width
	// - useTabs -- indent_style

	arrowParens: 'always',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	experimentalOperatorPosition: 'start',
	experimentalTernaries: false,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	jsxSingleQuote: false,
	objectWrap: 'preserve',
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	trailingComma: 'all',
	vueIndentScriptAndStyle: false,
};

export default config;
