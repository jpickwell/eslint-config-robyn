/* eslint-disable max-lines -- nearly impossible to comply with */
'use strict';

const fs = require('fs');
const path = require('path');
const { override } = require('../lib/helpers');
const sharedConfigs = require('../lib/shared-configs');

/** @typedef {import('eslint').BaseConfig} */

// eslint-disable-next-line node/no-sync -- not an issue
const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json') // eslint-disable-line node/no-sync -- not an issue
  ? path.resolve('types/tsconfig.json')
  : undefined;

/** @type {BaseConfig} */
module.exports = {
  overrides: [
    override(['ts'], {
      parserOptions: {
        project: tsConfig,
      },
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 0,
        '@typescript-eslint/array-type': [
          0,
          {
            default: 'array-simple',
          },
        ],
        '@typescript-eslint/await-thenable': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/ban-tslint-comment': 0,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/class-literal-property-style': 0,
        '@typescript-eslint/consistent-indexed-object-style': 0,
        '@typescript-eslint/consistent-type-assertions': 0,
        '@typescript-eslint/consistent-type-definitions': 0,
        '@typescript-eslint/consistent-type-exports': 0,
        '@typescript-eslint/consistent-type-imports': 0,
        '@typescript-eslint/default-param-last': 'error', // extension
        '@typescript-eslint/dot-notation': 'error', // extension
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/init-declarations': sharedConfigs.initDeclarations, // extension
        '@typescript-eslint/lines-between-class-members': 'error', // extension
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/method-signature-style': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/no-array-constructor': 'error', // extension
        '@typescript-eslint/no-base-to-string': 0,
        '@typescript-eslint/no-confusing-non-null-assertion': 0,
        '@typescript-eslint/no-confusing-void-expression': 0,
        '@typescript-eslint/no-dupe-class-members': 'error', // extension
        '@typescript-eslint/no-duplicate-imports':
          sharedConfigs.noDuplicateImports, // extension
        '@typescript-eslint/no-dynamic-delete': 0,
        '@typescript-eslint/no-empty-function': 'error', // extension
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-extra-non-null-assertion': 0,
        '@typescript-eslint/no-extraneous-class': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/no-for-in-array': 0,
        '@typescript-eslint/no-implied-eval': 'error', // extension
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-invalid-this': 'error', // extension
        '@typescript-eslint/no-invalid-void-type': 0,
        '@typescript-eslint/no-loop-func': 'error', // extension
        '@typescript-eslint/no-loss-of-precision': 'error', // extension
        '@typescript-eslint/no-magic-numbers': 'off', // extension
        '@typescript-eslint/no-meaningless-void-operator': 0,
        '@typescript-eslint/no-misused-new': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 0,
        '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/no-redeclare': 'error', // extension
        '@typescript-eslint/no-require-imports': 0,
        '@typescript-eslint/no-restricted-imports': 'off', // extension
        '@typescript-eslint/no-shadow': [
          // extension
          sharedConfigs.noShadow[0],
          {
            ...sharedConfigs.noShadow[1],
            ignoreFunctionTypeParameterNameValueShadow: false,
          },
        ],
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-throw-literal': 'error', // extension
        '@typescript-eslint/no-type-alias': 0,
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unnecessary-qualifier': 0,
        '@typescript-eslint/no-unnecessary-type-arguments': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-unnecessary-type-constraint': 0,
        '@typescript-eslint/no-unsafe-argument': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/no-unused-expressions': 'error', // extension
        '@typescript-eslint/no-unused-vars': 'error', // extension
        '@typescript-eslint/no-use-before-define':
          sharedConfigs.noUseBeforeDefine, // extension
        '@typescript-eslint/no-useless-constructor': 'error', // extension
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/non-nullable-type-assertion-style': 0,
        '@typescript-eslint/padding-line-between-statements':
          sharedConfigs.paddingLineBetweenStatements, // extension
        '@typescript-eslint/prefer-as-const': 0,
        '@typescript-eslint/prefer-enum-initializers': 0,
        '@typescript-eslint/prefer-for-of': 0,
        '@typescript-eslint/prefer-function-type': 0,
        '@typescript-eslint/prefer-includes': 0,
        '@typescript-eslint/prefer-literal-enum-member': 0,
        '@typescript-eslint/prefer-namespace-keyword': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/prefer-optional-chain': 0,
        '@typescript-eslint/prefer-readonly': 0,
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        '@typescript-eslint/prefer-reduce-type-parameter': 0,
        '@typescript-eslint/prefer-regexp-exec': 0,
        '@typescript-eslint/prefer-return-this-type': 0,
        '@typescript-eslint/prefer-string-starts-ends-with': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,
        '@typescript-eslint/promise-function-async': 0,
        '@typescript-eslint/require-array-sort-compare': 0,
        '@typescript-eslint/require-await': 'error', // extension
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/return-await': 'error', // extension
        '@typescript-eslint/sort-type-union-intersection-members': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/switch-exhaustiveness-check': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/typedef': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/unified-signatures': 0,
        'constructor-super': 'off',
        'default-param-last': 'off',
        'dot-notation': 'off',
        'getter-return': 'off',
        'import/extensions': [
          0,
          'always',
          {
            ignorePackages: true,
            pattern: {
              ts: 'never',
            },
          },
        ],
        'import/named': 'off',
        'init-declarations': 'off',
        'lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        'no-const-assign': 'off',
        'no-dupe-args': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-duplicate-imports': 'off',
        'no-empty-function': 'off',
        'no-func-assign': 'off',
        'no-implied-eval': 'off',
        'no-import-assign': 'off',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-magic-numbers': 'off',
        'no-new-symbol': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-restricted-imports': 'off',
        'no-return-await': 'off',
        'no-setter-return': 'off',
        'no-shadow': 'off',
        'no-this-before-super': 'off',
        'no-throw-literal': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-var': 'error',
        'padding-line-between-statements': 'off',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'require-await': 'off',
        'valid-typeof': 'off',
      },
    }),
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // The rules below are off for simple rule detection. This is to get
    // around eslint-find-rules' overrides limitation. These rules are set in
    // the Typescript override above.

    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-tslint-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-exports': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-loss-of-precision': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    '@typescript-eslint/no-misused-new': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/padding-line-between-statements': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-return-this-type': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'off',
  },
};
