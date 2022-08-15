const express = require("express");
const acccountsRouteer = require("./accounts/accounts-router")

const server = express();

server.use(express.json());

server.use("/api/accounts", acccountsRouteer)

server.use("*", (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

module.exports = server;
