const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose") 

// middleware (for every request)
app.use(express.json()) // Looks for a request body and parses it and turns it into 'req.body'

app.use(morgan("dev")) // logs requests to the console.

//connect to db
mongoose.connect("mongodb://localhost:27017/cruddb", 
    {
        useNewUrlParser:  true,
        useFindAndModify: false,
        useCreateIndex:  true,
        useUnifiedTopology:  true   
    },
    () => console.log("Connected to the data base")
    )

// Routes
app.use('/inventory', require("./routes/inventoryRouter"))

app.use((err, req, res, next) => {
    console.log(err) 
    return res.send({error: err.message})
})

//server listen
app.listen(6000, () => {
    console.log("The server is running on Port 6000")
})