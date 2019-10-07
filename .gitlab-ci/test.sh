#!/usr/bin/env bash

# Based on Travis CI `node_js` language.

if [[ -f package.json ]]; then
  if [[ -f yarn.lock ]]; then
    echo 'yarn test'
#    yarn test
  else
    echo 'npm test'
#    npm test
  fi
fi
