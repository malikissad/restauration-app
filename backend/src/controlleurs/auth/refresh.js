require('dotenv').config()

exports.Refresh = (req,res) => {
    const accessToken = res.locals.accessToken

    res
    .cookie(process.env.AccessToken , accessToken,{
        httpOnly: true,
        secure: false,
        SameSite:'lux',
        maxAge: 60 * 1000
    })
    return res.status(200).json("nouveau accessToken envoyer avec succes")
}