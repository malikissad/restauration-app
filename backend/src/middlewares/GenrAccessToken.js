require('dotenv').config()
const jwt = require('jsonwebtoken')
function GenrAccessToken( req, res, next){
    const username = res.locals.verify
    const accessToken = jwt.sign(
        {username: username},
        process.env.AccessToken,
        {expiresIn : String(process.env.AccessExpiredIn)}
    )

    res.locals.accessToken = accessToken
    next()
}

module.exports = {GenrAccessToken}