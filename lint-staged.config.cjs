'use strict';

module.exports = {
	'{.*,*}': 'pnpm prettier -w',
	'{.*,*}.{cjs,html,js,jsx,md,mjs,ts,tsx,vue}': 'pnpm eslint',
};
