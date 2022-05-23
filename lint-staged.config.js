'use strict';

module.exports = {
	'{.*,*}': 'pnpm prettier --write',
	'{.*.{cjs,js,md},*.{cjs,js,md}}': 'pnpm eslint',
};
