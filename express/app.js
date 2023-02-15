const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const adminRouters = require("./routes/admin")
const shopRouters = require("./routes/shop");
const notFoundRouters = require("./routes/page-not-found");

app.use(bodyParser.urlencoded({ extended: false }));
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouters);
app.use(shopRouters)
app.use(notFoundRouters)

app.listen(3000);
