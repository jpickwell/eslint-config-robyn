#!/bin/sh

scripts/find-new-rules.sh \
	&& tests/deprecated.cjs \
	&& tests/incompatible.cjs \
	&& yarn eslint-config-prettier index.cjs \
	&& yarn lint
