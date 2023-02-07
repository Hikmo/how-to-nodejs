const http = require("http");
const fs = require("fs");
const routes = require("./routes");

const server = http.createServer(routes.handler);
console.log(routes.someText)

server.listen(3000);
