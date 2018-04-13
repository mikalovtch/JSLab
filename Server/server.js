var http = require('http')
var fs = require('fs')
function accept(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Cache-Control': 'no-cache'
	});
	if (req.method == 'POST'){
	var body = fs.readFileSync("postResponse.html", "utf8");
		res.end(body)
	}
	else {
		var body = fs.readFileSync("getResponse.html", "utf8");
  		res.end(body);
	}
}
http.createServer(accept).listen(8080);