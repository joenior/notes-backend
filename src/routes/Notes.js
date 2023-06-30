const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Note = require("./../models/Note")


router.post('/list', async function(req,  res){
    var notes = await Note.find({userID : req.body.userID});

    res.json(notes);
});
router.post('/delete/', async function(req, res){
    var rest = await Note.deleteOne({id: req.body.id});
    console.log(rest.deletedCount);
    var response = {
        message: "Deleted succesfully",
    }
    res.json(response);
});
router.post('/add', async function(req, res){
    
   
    var newNote = new Note({
        id : req.body.id,
        userID: req.body.userID,
        title: req.body.title,
        content: req.body.content,

    });
    await newNote.save();
    const response =   {message: "New Note created"}
    res.json(response);

});
router.post('/update', async function(req, res){
var rest= await Note.deleteOne({id: req.body.id});
console.log(rest.deletedCount)

    const newNote = Note({
        id: req.body.id,
        userID : req.body.userID,
        title: req.body.title,
        content : req.body.content,
    });
    await newNote.save();

    var response = {
        message: "Updated succesfully",
    }
    res.json(response);
});
module.exports = router;