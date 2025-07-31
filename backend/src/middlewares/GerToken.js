const jwt = require('jsonwebtoken')

function GerToken (req,res,next) {

    if(!res.locals.username){
        return res.status(400).json("username n'existe pas")
    } 
    try{
        const refreshToken = jwt.sign(
            {username : res.locals.username},
            'ResfreshToken',
            {expiresIn: '1 min'}    
        )

        const accessToken = jwt.sign(
            {username : res.locals.username},
            'AccessToken',
            {expiresIn:'3 min'}
        )

        res.locals.token = {refreshToken, accessToken}
        next()
    }catch(err){
        return res.status(500).json(err.message)
    }

}
module.exports = { GerToken}