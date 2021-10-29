'use strict';

module.exports = {
  '{.*,*}': 'pnpm run prettier -- --write',
  '{.*.{cjs,js,md},*.{cjs,js,md}}': 'pnpm run eslint --',
};
