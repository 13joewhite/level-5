const express = require("express")
const app = express()
const { v4 } = require("uuidv4")

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    next()
})



app.get("/items", (req, res, next) => {
    console.log("get request recieved")
    res.send(req.body.playerName)
})

app.listen(6000, () => {
    console.log("Server is running on Port 6000")
})