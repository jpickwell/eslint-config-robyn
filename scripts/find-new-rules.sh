#!/bin/sh

find_new_rules() {
	yarn eslint-find-rules -i deprecated -u "$@"
}

echo 'Looking for new rules...'

find_new_rules --ext .js \
	&& find_new_rules --ext .ts \
	&& find_new_rules --ext .ts configs/vue.js

exit_code=$?

echo ''

exit $exit_code
