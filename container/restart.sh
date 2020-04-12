#!/bin/bash

BRANCH=`git rev-parse --abbrev-ref HEAD | sed -r 's/\/+/-/g'`

# stop
sudo docker stop shopfriend
sudo docker rm shopfriend

# build
sudo docker build -t rebel1l/shopfriend:$BRANCH .

# start
sudo docker run --name shopfriend -d -it -p 8080:80 rebel1l/shopfriend:$BRANCH
sudo docker ps
