var express = require("express");
var server = express();
server.listen("8080",function(err){
	console.log("服务器启动，运行在8080端口")
})

server.use(express.static("./src"))
