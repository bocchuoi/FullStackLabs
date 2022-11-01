//const noteModel = require('../models/Notes.js');
const noteModel = require('../models/NotesModel.js');
const express = require("express")

const routes = express.Router()

routes.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
  
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/add', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    req.body.dateAdded = Date.now()
    //TODO - Write your code here to save the note
    const newNote = new noteModel(req.body)

    try {
        await newNote.save()
        res.status(201).send(newNote)
    } catch (error) {
        console.log(error)
        res.status(601).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/', async (req, res) => {
    //TODO - Write your code here to returns all note
    try {
        const notes = await noteModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(500).send({message: "No notes Found"})
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/:noteId', async (req, res) => {
    // Validate request
    console.log(req.params.noteId)
    try {
        const note = await noteModel.find({id:req.params.id})
        res.status(200).send(note)
    } catch (error) {
        res.status(500).send({message: "No notes Found"})
        console.log(error)
    }
    //TODO - Write your code here to return only one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/update/:noteId', async (req, res) => {
    // Validate request
    //TODO - Write your code here to update the note using noteid
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    req.body.dateUpdated = Date.now()
    try {
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        console.log(updatedNote)
        const nb = await updatedNote.save()
        res.status(202).send(nb)
      } catch (err) {
        res.status(500).send(err)
      }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/delete/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await noteModel.findByIdAndRemove(req.params.noteId)
        res.status(200).send("Deleted\n" + note)
      } catch (err) {
        res.status(500).send(err)
      }
});

module.exports = routes