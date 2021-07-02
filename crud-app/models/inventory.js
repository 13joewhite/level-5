const mongoose = require("mongoose")
const Schema = mongoose.Schema 

// inventory blueprint
const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)