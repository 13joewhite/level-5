const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
 
app.use(express.json())
app.use(morgan('dev'))  

//connect to db
mongoose.connect("mongodb://localhost:27017/bounty-hunter-db", 
    {
        useNewUrlParser:  true,
        useFindAndModify: false,
        useCreateIndex:  true,
        useUnifiedTopology:  true  
    },
    () => console.log("Connected to the data base")
)

app.use("/bounties", require("./routes/bountiesRouter"))

app.use((err, req, res, next) => {
    console.log(err) 
    return res.send({error: err.message})
})

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})  