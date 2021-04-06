#!/bin/bash

. ./backend/config.sh

for i in "${DEPENDENCIES[@]}";
do
  cd $i

  if [ -e ./scripts/tools/restartAll.sh ]
  then
    ./scripts/tools/restartAll.sh
  else
    ./scripts/tools/restartService.sh
  fi

  cd ..
done

cd $ACTUAL_PATH || exit 1
