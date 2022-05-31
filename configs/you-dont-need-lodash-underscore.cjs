'use strict';

/** @typedef {import('eslint').BaseConfig} */

/** @type {BaseConfig} */
module.exports = {
	extends: ['plugin:you-dont-need-lodash-underscore/all'],
	rules: {
		'you-dont-need-lodash-underscore/all': 'off',
		'you-dont-need-lodash-underscore/any': 'off',
		'you-dont-need-lodash-underscore/cast-array': 'off',
		'you-dont-need-lodash-underscore/collect': 'off',
		'you-dont-need-lodash-underscore/contains': 'off',
		'you-dont-need-lodash-underscore/each': 'off',
		'you-dont-need-lodash-underscore/every': 'off',
		'you-dont-need-lodash-underscore/filter': 'off',
		'you-dont-need-lodash-underscore/find': 'off',
		'you-dont-need-lodash-underscore/find-index': 'off',
		'you-dont-need-lodash-underscore/flatten': 'off',
		'you-dont-need-lodash-underscore/foldl': 'off',
		'you-dont-need-lodash-underscore/foldr': 'off',
		'you-dont-need-lodash-underscore/for-each': 'off',
		'you-dont-need-lodash-underscore/get': 'off',
		'you-dont-need-lodash-underscore/includes': 'off',
		'you-dont-need-lodash-underscore/inject': 'off',
		'you-dont-need-lodash-underscore/is-function': 'off',
		'you-dont-need-lodash-underscore/is-nil': 'off',
		'you-dont-need-lodash-underscore/is-string': 'off',
		'you-dont-need-lodash-underscore/map': 'off',
		'you-dont-need-lodash-underscore/omit': 'off',
		'you-dont-need-lodash-underscore/reduce': 'off',
		'you-dont-need-lodash-underscore/reduce-right': 'off',
		'you-dont-need-lodash-underscore/select': 'off',
		'you-dont-need-lodash-underscore/size': 'off',
		'you-dont-need-lodash-underscore/some': 'off',
		'you-dont-need-lodash-underscore/take-right': 'off',
		'you-dont-need-lodash-underscore/throttle': 'off',
	},
};
