#!/bin/bash

. ./scripts/tools/config.sh

for i in "${DEPENDENCIES[@]}";
do
  cd $i
  ./scripts/tools/restartService.sh
  cd ..
done

cd $ACTUAL_PATH || exit 1
