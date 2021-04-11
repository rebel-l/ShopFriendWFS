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

# hooks
echo
echo -en "\E[40;34m\033[1mSetup: hooks\033[0m"
echo
cp ./scripts/hooks/* ./.git/hooks/
