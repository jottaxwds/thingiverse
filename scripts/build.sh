#!/usr/bin/env bash

set -e

PROJECT_NAME='jbff'

./scripts/prune.sh

PROJECT_NAME=${PROJECT_NAME} \
  docker-compose \
    -f docker-compose.yaml \
    --project-directory $PWD \
    --project-name ${PROJECT_NAME} \
    build \
    --compress