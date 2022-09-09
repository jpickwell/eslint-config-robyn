'use strict';

const config = {
	'{.*,*}': 'npm run prettier:write --',
	'{.*,*}.{js,md,ts,vue}': 'npm run eslint:fix --',
};

module.exports = config;
