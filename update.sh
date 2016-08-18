#!/bin/bash

clear

echo "Copying react-materialize source into webpack boilerplate"
echo "Make sure webpack-boilerplate folder is the same path as react-materialize"

SOURCE=$HOME/dev/react-materialize/src/
DEV=$HOME/dev/webpack-boilerplate/src/
mkdir -p $DEV/react-materialize/
cp -R $SOURCE/. $DEV/react-materialize/

echo $SOURCE
