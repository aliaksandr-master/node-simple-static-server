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
