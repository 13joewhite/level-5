const express = require("express")
const countriesRouter = express.Router()

const countries = [
    { country: "United States", population: "331,002,651", location: "west" },
    { country: "China", population: "1,439,323,776", location: "east" },
    { country: "India", population: "1,380,004,385", location: "east" }
]

countriesRouter.route("/")
    .get((req, res) => {
        res.send(countries)
    })

//get one
countriesRouter.get("/search/location", (req, res) => {
    const location = req.query.location
    const filteredCountries = countries.filter(country => country.location === location)
    res.send(filteredCountries)
})

module.exports = countriesRouter
