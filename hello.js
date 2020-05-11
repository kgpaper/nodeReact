const http = require("http");
const url = require('url');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).path;
    switch(path){
        case "/dsc":
            res.write("you are a dsc member")
            break;
        default:
            res.write("404")
    }
    res.end();
});

console.log("server on");
server.listen(8080);