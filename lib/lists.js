'use strict';

const allExtensions = ['.ts', '.d.ts', '.js', '.cjs', '.mjs'];

const restrictedSyntax = [
  'ContinueStatement',
  'DebuggerStatement',
  'JSXAttribute',
  'JSXClosingElement',
  'JSXElement',
  'JSXEmptyExpression',
  'JSXExpressionContainer',
  'JSXIdentifier',
  'JSXMemberExpression',
  'JSXNamespacedName',
  'JSXOpeningElement',
  'JSXSpreadAttribute',
  'JSXText',
  'SequenceExpression',
];

const warningCommentTerms = ['fixme', 'hack', 'optimize', 'todo', 'xxx'];

module.exports = {
  allExtensions,
  restrictedSyntax,
  warningCommentTerms,
};
