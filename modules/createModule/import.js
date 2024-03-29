// importing modules
var http = require('http'); // inbuilt module
var dt = require('./export');   // exported module

// create a server object
http.createServer(function(req, res)  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time currently are : " + dt());   // write a response to the client
    res.end();  // end the response
}).listen(8080);    // the server object listens on port 8080

// link
// http://localhost:8080/