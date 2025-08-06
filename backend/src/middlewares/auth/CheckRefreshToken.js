const jwt = require('jsonwebtoken')

function CheckRefreshToken(req, res, next){
    try{
        const refreshToken = req.cookies.RefreshToken
        if(!refreshToken) {
         return res.status(400).json("resfreshToken manquent")
        }
        const verify = jwt.verify(refreshToken, process.env.RefreshToken)
        res.locals.verify = verify
        next()

    }catch(err){
       return res.status(400).json(err)        
    }
}

module.exports = {CheckRefreshToken}