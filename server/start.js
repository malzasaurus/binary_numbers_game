'use strict';

// Create a node server instance!
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app')();
    server.on('request', app); // Attach the Express application.
};

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log('Server started on port' + PORT);
    });

};

createApplication().then(startServer).catch(function (err) {
    console.error(err.stack);
    process.kill(1);
});
