const {Users} = require('../models/Users.js')

async function CheckInformation(req, res, next) {
    
    //test that we have all the information
    const { id_users, username ,Email, name, role, password } = req.body
    // return res.status(200).json({id_users, Email, name, role, password})
    if(!id_users || !username || !Email || !name || !role || !password) {
        return res.status(400).json("there is a lack of information")
    }
        // return res.status(200).json(req.body)
    //test length of the password
    if(password.length < 5 ){
        return res.status(400).json("your password is too short")
    }
    
    //test that the user does not existe
    // try{
    //     await Users.findOne({where: {
    //         Email : req.body.Email,
    //         role : req.body.Role
    //     }})
    //     next()
    // }catch(err) {
    //     return res.status(500).json({message : err.message})
    // }
    next()

}

module.exports = {CheckInformation}