#!/bin/bash
if [[ -z "$1" ]]; then
    echo "Missing package name..."
    exit 1
fi

if [[  $# -eq 1 ]]; then
    echo "Checking for $1..."
    npm list --depth 1 --global $1 &>/dev/null
    result=$?
    #echo "Result: $result"
    if [[ $result -eq "1" ]]; then
            echo "$1 is not installed ):"
            echo "Installing $1..."
            npm install -g $1
    else
            echo "$1 is installed (:"
            exit 0
    fi
else
    echo "Checking for $1@$2..."
    npm list --depth 1 --global $1@$2 &>/dev/null
    result=$?
    #echo "Result: $result"
    if [[ $result -eq "1" ]]; then
        echo "$1@$2 is not installed...):"
        echo "Installing $1@$2..."
        npm install -g $1@$2
    else
        echo "$1@$2 is installed (:"
        exit 0
    fi
fi