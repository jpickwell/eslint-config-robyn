#!/bin/sh

yarn standard-version -s && git push --follow-tags origin main
