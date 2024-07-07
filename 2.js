var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello AITS-AI&ML\n');
}).listen(5000);
console.log('Server running at http://localhost:5000/');
