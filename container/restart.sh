#!/bin/bash

BRANCH=`git rev-parse --abbrev-ref HEAD | sed -r 's/\/+/-/g'`

echo
echo "Restart ShopFriend WebApp ..."
echo "Branch: $BRANCH"
echo

# stop
docker stop shopfriend
docker rm shopfriend

# build
docker build -t rebel1l/shopfriend:$BRANCH .

# start
docker run --name shopfriend -d -it -p 8080:80 rebel1l/shopfriend:$BRANCH
docker ps
