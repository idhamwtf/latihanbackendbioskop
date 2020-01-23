const express = require('express')
const {authControllers} = require('./../1controllers')

const router = express.Router()

//action buat register
router.post('/register', authControllers.registerUser)
router.post('/login', authControllers.loginUser)


module.exports=router