var http = require('http');
var url = require('url');
var fs = require('fs');
//run follow command at this directory
//npm install colors
var colors = require('colors');

var PORT = 8080;
//var ROOT = "C:\\myworkspace\\im\\node-http\\";

var outMap = {};
var downloadMap = {};

//contacts api
outMap['/contact/all'] = [{
	"voip_number": "50011580",
	"client_id": "50011580"
},
{
	"voip_number": "50011581",
	"client_id": "50011581",
	"nickname": "克拉1"
},
{
	"voip_number": "50011582",
	"client_id": "50011582",
	"nickname": "克拉2"
},
{
	"voip_number": "50011583",
	"client_id": "50011583",
	"nickname": "克拉3"
},
{
	"voip_number": "50011584",
	"client_id": "50011584",
	"nickname": "克拉4"
},
{
	"voip_number": "50011585",
	"client_id": "50011585",
	"nickname": "克拉5"
},
{
	"voip_number": "50011586",
	"client_id": "50011586",
	"nickname": "克拉6"
},
{
	"voip_number": "50011587",
	"client_id": "50011587",
	"nickname": "克拉7"
},
{
	"voip_number": "50011588",
	"client_id": "50011588",
	"nickname": "克拉8"
},
{
	"voip_number": "50011589",
	"client_id": "50011589",
	"nickname": "克拉9"
}];
outMap['/contact/insert'] = {
	"code": "0",
	"message": "insert success"
};

outMap['/contact/delete/50011580'] = {
	"code": "0",
	"message": ""
};
outMap['/contact/delete/123456789'] = {
	"code": "1",
	"message": ""
};

//cloud api
outMap['/api/login/3a70dd4443a3f942'] = {
	"voip_number": "50011587",
	"nickname": "马大哈"
};
outMap['/api/query/12345678'] = {
	"code": "1",
	"message": "not existed"
};
outMap['/api/query/123456789'] = {
	"code": "0",
	"message": "",
    "voip_number": "123456789",
    "client_id": "cid123456789",
    "nickname": ""
};

//sip proxy
outMap['/proxy/bind/209e87b9ef666e47'] = "101:101@10.0.0.213:5060";
outMap['/proxy/client/123%254010.0.0.213%253A5060'] = "123123123";
outMap['/proxy/sip/c13bef48392f1f9f'] = "123@10.0.0.213:5060";

//download qrcode
downloadMap['/api/download/qrcode'] = {
    "mime": "image/png",
    "file": "qrcode.png"
};

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
