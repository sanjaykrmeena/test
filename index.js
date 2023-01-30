const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 4000;

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res)=>{
    if(req.url == "/") {
        return res.end(home);
    }
    else if(req.url == "/about") {
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    else if(req.url == "/contact") {
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    else if(req.url == "/service") {
        return res.end("<h1>SERVICE PAGE</h1>");
    }
    else {
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, ()=> {
    console.log(`Server is Working`);
});