#!/bin/bash
FILE="shopfriend.de"

showHelp(){
    echo
    echo "Script de-/activates ssl mode."
    echo "usage: ./scripts/tools/switch-mode.sh [options]"
    echo
    echo "Options:"
    echo "-h, -?    shows this help"
    echo "-s        starts web application in ssl mode"
    echo
}

while getopts "h?s" opt; do
    case "$opt" in
        h|\?)
            showHelp
            exit 0
            ;;
        s)
            FILE="shopfriend-ssl.de"
            ;;
        esac
done

SOURCE="/etc/nginx/sites-available/$FILE"
TARGET="/etc/nginx/sites-enabled/$FILE"

if [ ! -f "$TARGET" ]; then
    sudo rm /etc/nginx/sites-enabled/*
    sudo ln -s $SOURCE $TARGET
    sudo service nginx reload
fi
