const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// middleware (for every request)
app.use(express.json()) // Looks for a request body and parses it and turns it into 'req.body'

app.use(morgan("dev")) // logs requests to the console.

//connect to db
mongoose.connect("mongodb://localhost:27017/moviesdb", 
    {
        useNewUrlParser:  true,
        useFindAndModify: false,
        useCreateIndex:  true,
        useUnifiedTopology:  true   
    },
    () => console.log("Connected to the data base")
    )

// Routes
app.use('/movies', require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvRouter"))


//server listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})