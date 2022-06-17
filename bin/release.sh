#!/bin/sh

pnpm release && git push --follow-tags origin main
