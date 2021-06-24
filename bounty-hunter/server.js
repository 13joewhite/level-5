const express = require("express")
const app = express()


app.use(express.json())

app.use("/bounties", require("./routes/bounties"))

app.listen(7000, () => {
    console.log("The server is running on Port 7000")
})