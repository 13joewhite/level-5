const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory")
 
// Get All
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventories) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventories)
    })
})


// Get One
inventoryRouter.get("/:inventoryId", (req, res) => {
    Inventory.findById( { _id: req.params.inventoryId }, (err, findOne) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(findOne)
    })
})

// Post One
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedInventory)
    })
})

//delete one
inventoryRouter.delete("/:inventoryId", (req, res) => {
    Inventory.findOneAndDelete({ _id: req.params.inventoryId }, (err, deletedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`${deletedInventory.item} successfully deleted from database`)
    })
})

//update one
inventoryRouter.put("/:inventoryId", (req, res) => {
    Inventory.findOneAndUpdate(
        {  _id: req.params.inventoryId }, 
        req.body, 
        { new: true }, 
        (err, updatedInventory) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedInventory)
        }
    )
})

module.exports = inventoryRouter 