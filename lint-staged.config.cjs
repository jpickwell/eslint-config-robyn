'use strict';

module.exports = {
	'{.*,*}': `yarn prettier -w`,
	'{.*,*}.{cjs,cts,html,js,jsx,md,mjs,mts,ts,tsx,vue}': `yarn eslint --fix`,
};
