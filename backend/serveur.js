require('dotenv').config()

const router = require('./src/route.js')
const {Users} = require('./src/models/Users.js') 
const sequelize = require('./src/config/db.js')
const express = require('express')
const app = express()
// const Port = process.env.PORT
const Port = 5000


app.use(express.json())
app.use('/auth',router)

app.get('/test', async (req,res) => {
    await sequelize.authenticate()
    .then(()=> {res.json("bon cennexion")})
    .catch(err =>{res.json(err)})
})


app.get('/search', async (req,res)=> {
    const users = await Users.findAll()
    return res.json(users)
})

app.listen(Port, () => {
    console.log(`serveur is runing on ${Port}`)
})