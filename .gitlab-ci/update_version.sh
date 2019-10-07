#!/usr/bin/env bash

git config --global user.email "${GITLAB_USER_EMAIL}"
git config --global user.name "${GITLAB_USER_NAME}"
git config receive.advertisePushOptions true

# GitLab checks out the commit, not the branch, so we're detached. This
# essentially checks out the branch at the specified commit, so we're no longer
# detached.
git checkout -B "${CI_COMMIT_REF_NAME}" "${CI_COMMIT_SHA}"

if [[ -f package.json ]]; then
  if [[ -f yarn.lock ]]; then
    yarn release
  else
    npm run release
  fi
fi

git push --follow-tags "${CI_REPOSITORY_URL}" master
