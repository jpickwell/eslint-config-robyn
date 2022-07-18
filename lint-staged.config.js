'use strict';

const config = {
	'{.*,*}': 'yarn prettier:write',
	'{.*,*}.{cjs,cts,html,js,jsx,md,mjs,mts,ts,tsx,vue}': 'yarn eslint:fix',
};

module.exports = config;
