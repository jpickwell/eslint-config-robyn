#!/usr/bin/env bash

# Based on Travis CI `node_js` language.

if [[ -f package.json ]]; then
  if [[ -f yarn.lock ]]; then
    yarn test
  else
    npm test
  fi
fi
