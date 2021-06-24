const express = require("express")
const app = express()

app.use(express.json())

app.use("/items", require("./routes/items"))

app.listen(6500, () => {
    console.log("Server is running on Port 6500")
})