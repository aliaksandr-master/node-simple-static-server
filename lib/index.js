'use strict';

var path = require('path');
var http = require('http');
var nodeStatic = require('node-static');

require('colors');

var staticServer = {
	run: function (options) {
		if (options == null) {
			options = {};
		}

		// DEFAULT OPTIONS
		var settings = {
			port: 9000,  // server port
			dir: './',   // static dir,
			cwd: process.cwd(), // root for static dir
			logs: true,  // log success
			loge: true,  // log errors,
			gzip: false, // gzip response
			cache: 3600  // cache time
		};

		// REPLACE SETTINGS FROM OPTIONS
		for (var key in options) {
			if (options.hasOwnProperty(key)) {
				settings[key] = options[key];
			}
		}

		// SET ABSOLUTE PATH OF STATIC DIR
		settings.dirAbs = path.normalize(path.join(settings.cwd, settings.dir));

		// SERVER
		// INIT STATIC SERVER
		var fileServer = new nodeStatic.Server(settings.dirAbs, {
			gzip: settings.gzip,
			cache: settings.cache
		});

		// INIT HTTP SERVER
		var server = http.createServer(function (request, response) {
			request.addListener('end', function () {
				fileServer.serve(request, response, function (err) {
					settings.logs && console.log(String(err.status).cyan, request.url);
					response.end();
				});
			}).resume();
		});

		// TRACE LISTENING
		server.on('listening', function () {
			console.log(
				'Static Server', 'Run'.red,
				'\nAt: ', 'http://localhost:'.cyan, (settings.port + '').red,
				'\nStatic Dir:', settings.dirAbs.cyan,
				'\n________________'.red
			);
		});

		// LISTEN PORT, RUN HTTP SERVER
		server.listen(settings.port);

		server.on('error', function (error) {
			console.error(('Something Wrong With Server: "' + error.message + '"').red);
			return false;
		});

		return server;
	}
};

module.exports = staticServer;

// IF COMMAND LINE - RUN
if (!module.parent) {
	staticServer.run(require('optimist').argv);
}
