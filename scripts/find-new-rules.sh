#!/bin/sh

find_new_rules() {
	yarn eslint-find-rules -i deprecated -u "$@"
}

echo 'Looking for new rules...'

find_new_rules --ext .cjs \
	&& find_new_rules --ext .ts \
	&& find_new_rules --ext .ts vue.cjs

exit_code=$?

echo ''

exit $exit_code
