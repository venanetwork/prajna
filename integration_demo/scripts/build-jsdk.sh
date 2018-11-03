#!/usr/bin/env bash
set -e

cd ../jsdk
yarn run build
yarn link
cd ../integration_demo
yarn link @venaprotocol/jsdk

