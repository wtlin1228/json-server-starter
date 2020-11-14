#!/bin/sh
#
# reset-db remove old db and generate a new one

mkdir -p dist

if [ -f "dist/db.json" ]; then
    rm dist/db.json
fi

node src/index.js
