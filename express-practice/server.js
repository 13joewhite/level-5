const express = require("express")
const app = express()
const { uuid } = require("uuidv4")
const { v4 } = require("uuid")


// middleware (for every request)
app.use(express.json()) // Looks for a request body and parses it and turns it into 'req.body'


// Routes
app.use('/movies', require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvRouter"))
//server listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})