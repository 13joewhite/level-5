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
// bountiesRouter.get("/:bountyId", (req, res) => {
//     const bountyID = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyID)
//     res.send(foundBounty)
// })

//delete one
bountiesRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedBounty} from database`)
    })
})

//update one
bountiesRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, //find this one to updats=e
        req.body, // update the object with this data
        { new: true }, // send back the updated version
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }

    )
})


module.exports = bountiesRouter