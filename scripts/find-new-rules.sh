#!/bin/sh

find_new_rules() {
	npx eslint-find-rules -i deprecated -u "$@"
}

echo 'Looking for new rules...'

find_new_rules --ext .js configs/index.js \
	&& find_new_rules --ext .ts configs/typescript/index.js \
	&& find_new_rules --ext .ts configs/typescript/vue.js

exit_code=$?

echo ''

exit $exit_code
