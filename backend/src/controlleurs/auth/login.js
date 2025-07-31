exports.Login = async (req,res)=>{
    res
    .cookie('refrshToken', res.locals.token.refreshToken,{
        httpOnly: true,
        secure: false,
        SameSite:'lux',
        maxAge: 180 * 1000
    })
    .cookie('accessToken', res.locals.token.accessToken, {
        httpOnly: true,
        secure: false,
        SameSite:'lux',
        maxAge: 60 * 1000
    })
    return res.status(200).json("token envoyer avec succes")
}