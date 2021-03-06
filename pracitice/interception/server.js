const express = require("express")
const app = express()
const { v4 } = require("uuidv4")
const importIntercept = require("./interception.js")

app.use(express.json())

app.get("/items", importIntercept, (req, res, next) => {
    console.log("THE ITEMS MIDDLEWARE WAS EXECUTED")
    res.send(req.body)
    next()
})

// app.get("/items", (req, res, next) => {
//     console.log("get request recieved")
//     res.send(req.body)
// })

app.listen(6000, () => {
    console.log("Server is running on Port 6000")
})