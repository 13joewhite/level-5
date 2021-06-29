const express = require("express")
const bountiesRouter = express.Router()
const Bounty = require("../models/bounties")

//get all
bountiesRouter.get("/", (req, res, next) => { 
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// add one
bountiesRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

    //get one
bountiesRouter.get("/:bountyId", (req, res) => {
    const bountyID = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyID)
    res.send(foundBounty)
})

//delete one
bountiesRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty")
})

//update one
bountiesRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


module.exports = bountiesRouter