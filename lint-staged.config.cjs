'use strict';

module.exports = {
	'{.*,*}': `yarn prettier -w`,
	'{.*,*}.{c[jt]s,html,js?(x),md,m[jt]s,ts?(x),vue}': `yarn eslint`,
};
