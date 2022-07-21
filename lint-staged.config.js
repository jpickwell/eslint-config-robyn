'use strict';

const config = {
	'{.*,*}': 'yarn prettier:write',
	'{.*,*}.{js,md,ts,vue}': 'yarn eslint:fix',
};

module.exports = config;
