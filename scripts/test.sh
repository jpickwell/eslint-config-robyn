#!/bin/sh

scripts/find-new-rules.sh \
	&& check:deprecated-rules \
	&& tests/incompatible.js \
	&& yarn eslint-config-prettier index.js \
	&& yarn lint
