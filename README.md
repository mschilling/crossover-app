# Crossover [![Build Status](https://travis-ci.org/mschilling/crossover-app.svg?branch=master)](https://travis-ci.org/mschilling/crossover-app)
Choose a side and watch 📺

## Development setup

#### - Install NodeJS

#### - Install tooling

Install Cordova:
`sudo npm install -g cordova`

Install Ionic:
`$ sudo npm install -g ionic`

Install Firebase Tools:
`$ sudo npm install -g firebase-tools`
(more info: https://firebase.google.com/docs/cli/)

#### - Install dependencies
`$ npm install`

#### - Run Project
by default, just type:
`$ ionic serve`

want multiple devices type:
`$ ionic serve -l`

#### - Run project on devices
`$ ionic android run` or `$ ionic ios run`  to run the project on connected or virtual devices.

## Notes

### Create production build
`npm run ionic:build --prod`

### Add browser platform
`ionic platform add browser`
and build with..
`ionic build browser --prod`

