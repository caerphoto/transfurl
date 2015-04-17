/*jshint node:true */
var http = require("http");
var server;
var queryString = require("querystring");
var url = require("url");
var openUrl = require("open");
var validator = require("validator");

// Shell colours, for pretty logging
var GREEN = "\033[32m";
var RED =   "\033[31m";
var NORMAL = "\033[0m";

function addProtocol(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "http://" + url;
    }
    return url;
}

server = http.createServer(function (req, res) {
    var params = queryString.parse(url.parse(req.url).query);
    var newUrl = addProtocol(params.url);
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (validator.isURL(newUrl)) {
        console.log(GREEN + "Opening URL:" + NORMAL, newUrl);
        openUrl(newUrl);
        res.statusCode = 204;
    } else {
        console.log(RED + "Invalid request:" + NORMAL, req.url);
        res.statusCode = 400;
    }
    res.end();
});

server.listen(4200, function () {
    console.log("Listening on port 4200...");
});
