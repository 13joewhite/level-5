const express = require("express")
const movieRouter = express.Router()
const { uuid } = require("uuidv4")
const { v4 } = require("uuid")

//fake data 
const movies = [ 
    { title: "die hard", genre: "action", _id: v4() },
    { title: "star wars IV", genre: "fantasy", _id: v4() },
    { title: "lion king", genre: "fantasy", _id: v4() },
    { title: "friday the 13th", genre: "horror",  _id: v4()}
]
r
// Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})


// Get One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

//get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    req.body._id = v4()
    movies.push(req.body)
    res.send(`Added ${req.body.title}`)
})

//delete one
movieRouter.delete("/:movieId2", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("successfully deleted")
})

//update one
movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie) 
})


// Routes
// movieRouter.route("/")
//     .get((request, response) => {
//         response.send(movies)
//     })
//     .post((req, res) => {
//         req.body._id = v4()
//         movies.push(req.body)
//         res.send(`Added ${req.body.title}`)
//     })  




module.exports = movieRouter