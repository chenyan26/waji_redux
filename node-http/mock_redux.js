var http = require('http');
var url = require('url');
var fs = require('fs');
//run follow command at this directory
//npm install colors
var colors = require('colors');

var PORT = 8080;

var outMap = {};
var downloadMap = {};


//account api
outMap['/account/111'] = {
  "username": "18508446612",
  "nickname": "kiyola"
};

outMap['/test/111'] = {
    id: 1,
    title: 'Some Article',
    author: {id: 7, name: 'Dan'},
    contributors: [{id: 10, name: 'Abe'}, {id: 15, name: 'Fred'}]
  };


//------------------------------------------------------------------------------------------
function downloadFile(request, response, download) {
    response.setHeader('Content-Type', download.mime);
    fs.readFile(download.file, function(err, data) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end(err);
            console.error(("500 " + request.method + " " + request.url).red);
        } else {
            response.write(data);
            response.end();
            console.log("200 " + request.method + " " + request.url);
        }
    });
}

function handler(request, response) {
    var location = url.parse(request.url);

    var download = downloadMap[location.pathname];
    if (download != null) {
        downloadFile(request, response, download);
        return;
    }

    response.setHeader('Content-Type', 'application/json');

  /*
     解决下面这个问题:
     No 'Access-Control-Allow-Origin' header is present on the requested resource.
     Origin 'null' is therefore not allowed access.
   */
    response.setHeader("Access-Control-Allow-Origin", "*");

    var out = outMap[location.pathname];
    if (out == null) {
        response.statusCode = 404;
        response.end();
        console.error(("404 " + request.method + " " + request.url).red);
    } else {
        response.end(JSON.stringify(out));
        console.log("200 " + request.method + " " + request.url);
    }
}

http.createServer(handler).listen(PORT);
console.log("http server running on port " + PORT + " ...") ;
