const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
    return;
  }
  if (req.url === "/about") {
    res.end("welcome to about page");
    return;
  }
  res.end(`
<h1>Oops!</h1>
<p>We cant find the page</p>
<a href="/">Back home</a>
  `);
});

server.listen(3200);
