const path = require("path")

const express = require("express");
const bodyParser = require("body-parser");

const homeRouters = require("./routers/home")
const usersRouters = require("./routers/users")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouters);
app.use("/users", usersRouters);

app.listen(3000);
