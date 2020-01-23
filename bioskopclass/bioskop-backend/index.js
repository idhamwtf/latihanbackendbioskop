const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//create app
const app = express()

// tes connection
const {mysqldb}=require('./connection')
mysqldb.connect((err)=>{
    if(err) throw err
    console.log('mysqlconnected')
})


//set cors -- buat cross policy
app.use(cors())

// set middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// set routes
app.get('/',(req,res)=>{
    res.status(200).send('hello from server side')
})

const {authRouters, adminRouters} = require('./1routes')
app.use('/auth', authRouters)
app.use('/admin', adminRouters)

// set port
const PORT = 6969
app.listen(PORT, console.log('JALAN DI PORT ' + PORT))