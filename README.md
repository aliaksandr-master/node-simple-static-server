[![npm](http://img.shields.io/npm/v/node-simple-static-server.svg?style=flat-square)](https://www.npmjs.com/package/node-simple-static-server)
[![npm](http://img.shields.io/npm/l/node-simple-static-server.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/node-simple-static-server.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/node-simple-static-server)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/node-simple-static-server/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/node-simple-static-server#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/node-simple-static-server.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/node-simple-static-server)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/node-simple-static-server.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/node-simple-static-server?branch=master)

#node-simple-static-server
=========================

Simple Static Server

for install you need to run this command:
```shell
$ npm install node-simple-static-server
```


# OPTIONS

##port
default: 9000,

##dir
default: './'

##log
###logs
default: true

log file success


###loge
default: true

log file error


##gzip
default: false


##cache
default: 3600


##cwd
default: process.cwd()

## Usage

### in module
```js
// ./static-server.js
var server = require('node-simple-static-server');
var options = {
   port: 9000
   // ...
}
server.run( options );
```
```shell
$ node ./static-server.js --port=9000 --cwd=/home/user/www/project/static/
```
