const express = require("express")
const bodyParser = require("body-parser")

const usersData = require("./routes/users")
const addUserData = require("./routes/add-user")

const app = express()

app.set("views", "views")
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-user", addUserData.router);
app.use(usersData.router);
console.log(addUserData.router)


app.listen(3000);