const express = require("express")
const movieRouter = express.Router()

//fake data 
const movies = [ 
    { title: "die hard", genre: "action"},
    { title: "star wars IV", genre: "fantasy"},
    { title: "lion king", genre: "fantasy"},
    { title: "friday the 13th", genre: "horror"}
]

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

module.exports = movieRouter 