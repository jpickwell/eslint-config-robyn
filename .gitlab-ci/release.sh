#!/usr/bin/env bash

git config --global user.email "${CI_EMAIL}"
git config --global user.name "${CI_NAME}"
git config receive.advertisePushOptions true
git checkout -B "${CI_COMMIT_REF_NAME}" "${CI_COMMIT_SHA}"

if [[ -f package.json ]]; then
  if [[ -f yarn.lock ]]; then
    yarn release
  else
    npm run release
  fi
fi

git push "https://${CI_USER}:${CI_ACCESS_TOKEN}@gitlab.com/jpickwell/eslint-config-robyn.git" --follow-tags master:master
git checkout develop
git merge master
git push "https://${CI_USER}:${CI_ACCESS_TOKEN}@gitlab.com/jpickwell/eslint-config-robyn.git" --follow-tags develop:develop
