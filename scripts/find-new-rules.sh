#!/bin/sh

find_new_rules() {
	pnpm eslint-find-rules -i deprecated -u "$@"
}

echo 'Looking for new rules...'

find_new_rules --ext .cjs \
	&& find_new_rules --ext .ts \
	&& find_new_rules --ext .ts vue.cjs

echo ''
