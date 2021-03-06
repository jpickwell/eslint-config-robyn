'use strict';

const config = {
	types: [
		{
			hidden: true,
			section: 'Builds',
			type: 'build',
		},
		{
			hidden: true,
			section: 'Chores',
			type: 'chore',
		},
		{
			hidden: true,
			section: 'Continuous Integrations',
			type: 'ci',
		},
		{
			section: 'Documentation',
			type: 'docs',
		},
		{
			section: 'Features',
			type: 'feat',
		},
		{
			section: 'Bug Fixes',
			type: 'fix',
		},
		{
			section: 'Performance Improvements',
			type: 'perf',
		},
		{
			hidden: true,
			section: 'Code Refactoring',
			type: 'refactor',
		},
		{
			section: 'Reverts',
			type: 'revert',
		},
		{
			hidden: true,
			section: 'Styles',
			type: 'style',
		},
		{
			hidden: true,
			section: 'Tests',
			type: 'test',
		},
	],
};

module.exports = config;
