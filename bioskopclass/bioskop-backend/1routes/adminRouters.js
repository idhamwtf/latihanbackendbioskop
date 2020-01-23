const express = require('express')
const {adminControllers} = require('./../1controllers')

const router = express.Router()

//action buat addmovie
router.post('/addmovie', adminControllers.addMovie)
router.post('/addgenre', adminControllers.addGenre)
module.exports=router