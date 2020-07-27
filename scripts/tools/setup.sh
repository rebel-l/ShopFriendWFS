#!/bin/bash

. ./backend/config.sh

for i in "${DEPENDENCIES[@]}";
do
  if [ ! -d "${BACKEND_PATH}/${i}" ]
  then
    git clone git@github.com:rebel-l/$i.git
  fi

  cd $i
  ./scripts/tools/setup.sh
  cd ..
done

cd $ACTUAL_PATH || exit 1
