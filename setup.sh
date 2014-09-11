#!/bin/bash

#install node
sudo apt-get install nodejs
sudo apt-get install npm
npm install
sudo npm install -g grunt-cli
sudo npm install -g nodemon
sudo ln -s /usr/bin/nodejs /usr/bin/node
#install mongodb
#sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
#echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
#sudo apt-get update
#sudo apt-get install mongodb-org

# Steps to setup a new project

# Edit package.json details (name)
# Edit mongodb config details (host, port, path)
# Edit config.js (db connection, session secret, port)

# Steps to enable ssl

# Place all ssl files in ssl folder
# Edit ssl.js
# Enable ssl session cookies
# Enable ssl server (make sure port 443 is available)

# Steps to setup auth

# enter auth credentials from google, facebook, and twitter in auth.js
# don't forget the callback routes located in session.js
