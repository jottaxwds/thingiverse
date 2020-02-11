#!/usr/bin/env bash

set -e

PROJECT_NAME='jbff'

PROJECT_NAME=${PROJECT_NAME} \
  docker-compose \
    -f docker-compose.yaml \
    --project-directory $PWD \
    --project-name ${PROJECT_NAME} \
    stop
