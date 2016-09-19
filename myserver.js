var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = './dist/index.html';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

  fs.readFile( documentRoot , function(err,data){
      res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
      });
      res.write(data);
      res.end();
  });
}).listen(8080);

console.log('服务器开启成功');
