#!/usr/bin/env bash

echo '.gitlab-ci/node_js.sh'

# Based on Travis CI `node_js` language.

# npm_disable_prefix
if [[ $(command -v sw_vers) && -f .npmrc ]]; then
  npm config delete prefix
fi

# npm_disable_spinner
npm config set spin false

# npm_disable_progress
npm config set progress false

# install
if [[ -f package.json ]]; then
  if [[ -f yarn.lock ]]; then
    yarn
  else
    if [[ -f npm-shrinkwrap.json || -f package-lock.json ]]; then
      npm ci
    else
      npm install
    fi
  fi
fi
