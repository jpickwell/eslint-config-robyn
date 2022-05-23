#!/bin/sh

pnpm run release && git push --follow-tags origin main
