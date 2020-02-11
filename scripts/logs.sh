#!/usr/bin/env bash

set -e

PROJECT_NAME='jbff'

OPTIONS=$1

docker logs ${PROJECT_NAME} ${OPTIONS}