var http = require('http'),
  port = 8080,
  host = "127.0.01";

var server = http.createServer(function(req, res){
  res.writeHead(200, {"content-Type":"text/plain"});
res.write("Hellao World");
res.end();
});

server.listen(port, host, function(){
  console.log("Listening...");
});
