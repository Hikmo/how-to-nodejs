const express = require("express");

const users = require("./add-user").users;

const router = express.Router()

router.get("/", (req, res, next) => {
    res.render("users", {
        users,
        pageTitle: "Users"
    })
})

exports.router = router