#!/bin/sh

scripts/find-new-rules.sh \
	&& tests/deprecated.cjs \
	&& tests/incompatible.cjs \
	&& pnpm eslint-config-prettier index.cjs \
	&& pnpm --silent lint
