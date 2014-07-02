"use strict";

// REQUIREMENTS
var path       = require('path');
var http       = require('http');

var nodeStatic = require('node-static');
var colors     = require('colors');



module.exports = function (options) {
	options || (options = {});

	// DEFAULT OPTIONS
	var settings = {
		port: 9000,  // server port
		dir: './',   // static dir
		logs: true,  // log success
		loge: true,  // log errors,
		gzip: false, // gzip response
		cache: 3600  // cache time
	};



	// PREPARE SETTINGS
	// REPLACE SETTINGS FROM OPTIONS
	var key;
	for (key in options) {
		if (options.hasOwnProperty(key)) {
			settings[key] = options[key];
		}
	}
	// SET ABSOLUTE PATH OF STATIC DIR
	settings.dirAbs = path.normalize(path.join(process.cwd(), settings.dir));



	// SERVER
	// INIT STATIC SERVER
	var fileServer = new nodeStatic.Server(settings.dirAbs, {
		gzip: settings.gzip,
		cache: settings.cache
	});



	// INIT HTTP SERVER
	var server = http.createServer(function (request, response) {
		request.addListener('end', function () {
			// SEND STATIC FILE
			fileServer.serve(request, response, function (err) {
				if (!err) {
					// CONSOLE LOG
					if (settings.logs) {
						console.log ((200 + '').green, request.url);
					}
				} else {
					// CONSOLE LOG
					if (settings.loge) {
						console.error((err.status + '').red, request.url)
					}
					response.end();
				}
			});
		}).resume();
	});


	// TRACE LISTENING
	server.on('listening', function () {
		console.log(
			'Static Server', 'Run'.red,
			'\nAt: ', 'http://localhost:'.blue, (settings.port + '').cyan,
			'\nStatic Dir:', settings.dirAbs.cyan,
			'\n________________'.red
		);
	});


	// LISTEN PORT, RUN HTTP SERVER
	server.listen(settings.port);
};


// IF COMMAND LINE - RUN
if (!module.parent) {
	module.exports(require('optimist').argv);
}