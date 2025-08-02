require('dotenv').config()

const {ProtectedRoute} = require('./src/middlewares/ProtectedRoute.js')
const router = require('./src/route.js')
const {Users} = require('./src/models/Users.js') 
const sequelize = require('./src/config/db.js')
const cookieparser = require('cookie-parser')

const express = require('express')
const app = express()
const {commande} = require('./src/models/commande.js')
const {Table} = require('./src/models/table.js')
app.use(express.json())
app.use(cookieparser())


app.use('/auth',router)


app.get('/test',async (req,res) => {
    try{
        const com = await commande.findAll()
     return res.json(com)
    }catch(err){
        return res.json(err.message)
    }
})

app.get('/testtable', async(req,res)=>{
    try{
        // const tab = await Table.create({
        //  num_tab: 4,
        //  nb_place: 3,
        //  status: "servie",
        //  id_comm: 1
        // })
        const tab = await Table.findAll()
        return res.json(tab)
    }catch(err){
        return res.json(err.message)
    }
})


app.get('/search', async (req,res)=> {
    const users = await Users.findAll()
    return res.json(users)
})

app.listen(process.env.PORT)