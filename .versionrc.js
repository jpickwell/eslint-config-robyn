'use strict';

module.exports = {
  commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/-/commit/{{hash}}',
  compareUrlFormat:
    '{{host}}/{{owner}}/{{repository}}/-/compare/{{previousTag}}...{{currentTag}}',
  issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/-/issues/{{id}}',
  userUrlFormat: '{{host}}/{{user}}',
  types: [
    {
      type: 'feat',
      section: 'Features',
    },
    {
      type: 'fix',
      section: 'Bug Fixes',
    },
    {
      type: 'docs',
      section: 'Documentation',
    },
    {
      type: 'style',
      hidden: true,
    },
    {
      type: 'refactor',
      hidden: true,
    },
    {
      type: 'perf',
      section: 'Performance Improvements',
    },
    {
      type: 'test',
      hidden: true,
    },
    {
      type: 'build',
      hidden: true,
    },
    {
      type: 'ci',
      hidden: true,
    },
    {
      type: 'chore',
      hidden: true,
    },
    {
      type: 'revert',
      section: 'Reverts',
    },
  ],
};
