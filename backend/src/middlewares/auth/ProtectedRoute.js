const jwt = require('jsonwebtoken')
function ProtectedRoute(req,res,next){
    const accessToken = req.headers.authorization?.split(' ')[1]
    if(!accessToken){
        return res.status(401).json("accessToken manquant")
    }
    
    try{
        const verifie = jwt.verify(accessToken, process.env.AccessToken)
        next()
    }catch(err){
        if(err.name === 'TokenExpiredError'){
           return res.status(403).json({
              err,
              message : "accesstoken expiré"
            })
        }else{
            return res.status(400).json(err)
        }
    }
       
}

module.exports = { ProtectedRoute } 