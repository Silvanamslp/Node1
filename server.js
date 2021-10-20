var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function (req, res) {
    var u = url.parse(req.url, true);
    var filename = u.pathname + ".html";
    fs.readFile(__dirname + filename, function (err, html) {
        if (err) {
            fs.readFile("index.html", function (err, html) {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(html);
                    res.end();
            })            
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        }
    })
}).listen(3000);
