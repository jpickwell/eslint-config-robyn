#!/bin/sh

scripts/find-new-rules.sh \
	&& tests/deprecated.js \
	&& tests/incompatible.js \
	&& npx eslint-config-prettier index.js \
	&& npm run lint
