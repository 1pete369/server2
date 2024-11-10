const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const users_router = require('./routes/users')
const todo_router = require('./routes/todos')
const day_router = require('./routes/days')

const app= express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.DB_URL)

const db= mongoose.connection

// app.listen(process.env.PORT_NUM,()=>{
//     console.log("server started on port ",process.env.PORT_NUM)
// })

app.get('/',(req,res)=>{
    res.json({ "message" : "it home bro"})
})

db.on('open',()=>{
    console.log("Connected to Mongodb")
})

app.use('/users',users_router)
app.use('/todos',todo_router)
app.use('/days',day_router)

module.exports = app

