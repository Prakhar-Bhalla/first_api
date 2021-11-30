const express = require("express");

const users = require("./users.json");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Home page");
});

app.get("/users", (req, res) => {
    res.send({users});
});

app.listen(2500, function() {
    console.log("listening port 2500");
});
