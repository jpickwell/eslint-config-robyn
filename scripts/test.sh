#!/bin/sh

scripts/find-new-rules.sh \
	&& scripts/build-full-config.js \
	&& tests/deprecated.js \
	&& tests/incompatible.js \
	&& npx eslint-config-prettier index.js \
	&& npm run lint
