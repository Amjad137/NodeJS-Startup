const http = require("http");

const port = 2220;

http
  .createServer((req,res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<h4>Hello Its Started now</h4>")
    res.end();
  })
  .listen(port, ()=> {
    console.log(`The Server is started on ${port}`);
  });

//   http://localhost:2220