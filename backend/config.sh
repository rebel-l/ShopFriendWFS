#!/bin/bash

DEPENDENCIES=("auth-service")

ACTUAL_PATH=`pwd`
BACKEND_PATH=$ACTUAL_PATH/backend
cd $BACKEND_PATH || exit 1
