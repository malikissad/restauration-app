const { Users} = require('../../../models/Users.js')
const bcrypt = require('bcrypt')

exports.RegistrationController = async (req, res) => {
    try{
        const existe = await Users.findOne({where: {
            username : req.body.username
        }})
        if(existe){return res.status(400).json("User already exists")}
        //hasher le mot de passe
        req.body.password = await bcrypt.hash(req.body.password, 10) 
        // return res.json(req.body)
        await Users.create(req.body)
        return res.status(201).json("User created successfully")
    }catch(err){
        return res.status(500).json(err.message)
    }

}