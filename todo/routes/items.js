const express = require("express")
const itemRouter = express.Router()
const { v4 } = require("uuid")

const items = [
    {
        "name": "Grocery Shopping",
        "description": "Get groceries",
        "imageUrl": "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "completed": false,
        "_id": v4()
    },
    {
        "name": "Basketball Practice",
        "description": "7:00-9:00",
        "imageUrl": "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "completed": false,
        "_id": v4()
    },
    {
        "name": "Clean",
        "description": "Clean the house",
        "imageUrl": "https://images.pexels.com/photos/3890198/pexels-photo-3890198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "completed": false,
        "_id": v4()
    },
    {
        "name": "Sleep",
        "description": "Go to bed",
        "imageUrl": "https://images.pexels.com/photos/6604845/pexels-photo-6604845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "completed": false,
        "_id": v4()
    },
]

//get all
itemRouter.get("/", (req, res) => {
    res.send(items)
})

//get one
itemRouter.get("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundItem = items.find(item => item._id === itemId)
    res.send(foundItem)
})

//update one
itemRouter.put("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundIndex = items.findIndex(item => item._id === itemId)
    const updatedItem = Object.assign(items[foundIndex], req.body)
    res.send(updatedItem)
})

//delete one
itemRouter.delete("/:itemId", (req, res) => {
    const itemId = req.params.itemId
    const foundIndex = items.findIndex(item => item._id === itemId)
    items.splice(foundIndex, 1)
    res.send("successfully deleted")
})


module.exports = itemRouter