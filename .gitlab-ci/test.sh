#!/bin/sh

# Based on Travis CI `node_js` language.

if [ -f package.json ]; then
	if [ -f yarn.lock ]; then
		yarn test
	elif [ -f pnpm-lock.yaml ]; then
		pnpm test
	else
		npm test
	fi
fi
