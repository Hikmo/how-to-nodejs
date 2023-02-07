const http = require("http");
const data = require("./data");

console.log(data)

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.write("<html><body><p>Greetings</p>");
    res.write("<form method='POST' action='create-user'><input type='text' name='user'>User Name</input><button type='submit'>Submit</button></form>")
    res.write("</body></html>");
    return res.end();
  } else if (url == "/users") {
    res.write("<html><body>")
    for (const user of data) {
      res.write(`<p>${user}</p>`);
    }
    res.write("</body></html>");
    return res.end()
  } else if (url === "/create-user") {
    const body = []
    req.on("data", chunk => {
      body.push(chunk)
    })
    req.on("end", () => {
      const str = Buffer.concat(body).toString();
      console.log(str.split("=")[1])
    })
    res.write("<html><body><p>Create user page</p></body></html>");
    return res.end();
  }
});

server.listen(3000);