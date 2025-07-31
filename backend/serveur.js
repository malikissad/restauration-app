require('dotenv').config()

const {ProtectedRoute} = require('./src/middlewares/ProtectedRoute.js')
const router = require('./src/route.js')
const {Users} = require('./src/models/Users.js') 
const sequelize = require('./src/config/db.js')
const cookieparser = require('cookie-parser')

const express = require('express')
const app = express()

// const Port = process.env.PORT


app.use(express.json())
app.use(cookieparser())


app.use('/auth',router)


app.get('/test', ProtectedRoute,async (req,res) => {
    return res.status(200).json('bon test')
})


app.get('/search', async (req,res)=> {
    const users = await Users.findAll()
    return res.json(users)
})

app.listen(process.env.PORT)