#!/bin/bash

#sudo mongod --config ./database/mongodb.config
nodemon ./server/server.js -w ./server
