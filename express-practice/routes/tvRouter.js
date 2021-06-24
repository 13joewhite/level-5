const express = require("express")
const { v4 } = require("uuid")
const tvRouter = express.Router()
const { uuid } = require("uuidv4")

//fake data
const tvShows = [
    { title: "The Chosen", genre: "gospel", _id: v4() },
    { title: "Breaking Bad", genre: "action", _id: v4() },
    { title: "Superman and Lois", genre: "action",  _id: v4() },
    { title: "The Office", genre: "comedy",  _id: v4() }
]

// Routes
tvRouter.get("/:showId", (req, res) => {
    const foundShow = tvShows.find(show => show._id === req.params.showId)
    res.send(foundShow)
})

tvRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredTvs = tvShows.filter(tv => tv.genre === genre)
    res.send(filteredTvs)
})

tvRouter.route("/")
    .get((req, res) => {
        res.send(tvShows)
    })
    .post((req, res) => {
        const newShow = req.body
        newShow._id = v4()
        tvShows.push(newShow)
        res.send(`Added ${newShow.title}`)
    })



module.exports = tvRouter