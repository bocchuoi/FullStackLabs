const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteDescription: {
        type: String
    },
    priority: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true
    },
    dateUpdated: {
        type: Date
    }
})

module.exports = mongoose.model("note", noteSchema)