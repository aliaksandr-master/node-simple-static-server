#node-simple-static-server
=========================

Simple Static Server

for install

```
    node install node-simple-static-server
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
var server = require('node-simple-static-server');
var options = {
   port: 9000
   // ...
}
server.run( options );
```
