const express = require("express");

const users = [];

const router = express.Router();

router.post("/", (req, res, next) => {
    const { user } = req.body;
    users.push(user);
    res.redirect("/");
});

router.get("/", (req, res, next) => {
    res.render("add-user", {pageTitle: "Add User"});
});

exports.router = router;
exports.users = users;
