// importing modules
var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) { // create server
    var q = url.parse(req.url, true);   // for reading url
    var filename = "." + q.pathname;    // adding . in front of pathname for location
    fs.readFile(filename, function (err, data) {    // readFile
        if (err) {  // if err occurs
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
        }
        // if no error occurs returns data
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();   // end of response
    });
}).listen(8080);    // listen on the port 8080