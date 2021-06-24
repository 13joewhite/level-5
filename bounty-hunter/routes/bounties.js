const express = require("express")
const bountiesRouter = express.Router()
const { v4 } = require("uuid")

const bounties = [
    {
        firstName: "Darth",
        lastName: "Revan",
        living: true,
        bounty: 10000,
        type: "Sith",
        _id: v4()
    },    
    {
        firstName: "Darth",
        lastName: "Malak",
        living: true,
        bounty: 5000,
        type: "Sith",
        _id: v4()
    },    
    {
        firstName: "Bastila",
        lastName: "Shan",
        living: true,
        bounty: 1000,
        type: "Jedi",
        _id: v4()     
    },
]

bountiesRouter.get("/:bountyId", (req, res) => {
    const bountyID = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyID)
    res.send(foundBounty)
})

bountiesRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty")
})

bountiesRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})

bountiesRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = v4()
        bounties.push(newBounty)
        res.send(`${newBounty.firstName} ${newBounty.lastName} has been added to the bounty list`)
    })

module.exports = bountiesRouter