const express = require("express")
const app = express()

const interecptFunc = app.use("/items", (req, res, next) => {
    console.log(" Get request was interecpted!! ")
    req.body = { playerName: "rick", playerNumber: 22 }
    next()
})


module.exports = interecptFunc