'use strict';

module.exports = {
	'{.*,*}': 'pnpm prettier -w',
	'{.*,*}.{cjs,html,js,md,mjs,ts,vue}': 'pnpm eslint',
};
