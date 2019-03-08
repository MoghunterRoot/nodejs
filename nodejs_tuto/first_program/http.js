const http = require("http");
const fs = require("fs")

http.createServer((req, res)=>{

	if (req.url == "/"){
		res.writeHead(200, {'Content-type': 'text/html'})
		res.write("<h1>Hello Vins<h1>\n")
		res.end()
	} else if (req.url == "/text"){
		res.writeHead(200, {'Content-type': 'text/html'})
		
		fs.readFile("text.txt", "utf-8", (err, data)=> {
			if (err){
				sendError404(res)
			} else {
				res.writeHead(200, {'Content-type': 'text/html'})
				res.write(data)
				res.end()
			}
		})
	} else {
		sendError404(res);
	}
	
}).listen(8080)

function sendError404(res){
	res.writeHead(404,{'Content-type': 'text/html'})
		res.write("<h1>404 - Not Found</h1>\n")
}