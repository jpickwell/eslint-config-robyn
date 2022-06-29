#!/bin/sh

scripts/find-new-rules.sh \
	&& tests/deprecated.js \
	&& tests/incompatible.js \
	&& yarn eslint-config-prettier index.js \
	&& yarn lint
