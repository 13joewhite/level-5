const express = require("express")
const app = express()

app.get("/items", (req, res, next) => {
    req.body = { playerName: "rick", playerNumber: 22 }
    next()
})


module.exports = app