'use strict';

const globals = require('globals');
const flattenDeep = require('lodash/fp/flattenDeep');
const reject = require('lodash/fp/reject');

/**
 * @param {...string} choices
 * @returns {RegExp}
 */
function buildAlternativesRegExp(...choices) {
  const alternatives = [...new Set(choices)].join('|');

  // eslint-disable-next-line security/detect-non-literal-regexp -- not an issue
  return new RegExp(`^(?:${alternatives})$`, 'u');
}

const identifiers = ['[A-Za-z][\\dA-Za-z]*', '[A-Z][\\dA-Z_]*'];
const identifiersRegExp = buildAlternativesRegExp(...identifiers);

const builtins = Object.keys({
  ...globals.builtin,
  ...globals['shared-node-browser'],
});

module.exports = {
  /**
   * @param {...(string|string[])} choices
   * @returns {string}
   */
  buildIdentifierMatchRegExpString(...choices) {
    return buildAlternativesRegExp(
      ...reject(
        /**
         * @param {string} alternative
         * @returns {boolean}
         */
        (alternative) => identifiersRegExp.test(alternative),
        flattenDeep(['_', identifiers, builtins, choices]),
      ),
    ).source;
  },
};
