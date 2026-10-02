#!/bin/bash

set -e

for DIR in "next-gdg" "cra5-gdg"
do
    pushd $DIR
    npm install
    popd
done
