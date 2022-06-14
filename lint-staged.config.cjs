'use strict';

module.exports = {
	'{.*,*}': `pnpm prettier -w`,
	'{.*,*}.{c[jt]s,html,js?(x),md,m[jt]s,ts?(x),vue}': `pnpm eslint`,
};
