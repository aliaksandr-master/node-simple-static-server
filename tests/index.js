'use strict';

var staticServer = require('./_lib/index');

exports['load lib'] = function (test) {
	test.ok(true);

	test.done();
};

exports['run server'] = function (test) {
	test.doesNotThrow(function () {
		staticServer.run();
		test.ok(true);
		test.done();
	});
};
