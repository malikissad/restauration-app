const {RegistrationController} = require('./controlleurs/auth/registration.js')
const {CheckInformation} = require('./middlewares/CheckInformation.js')
const router = require('express').Router()
const {Login}  = require('./controlleurs/auth/login.js')
const {CheckInfoLogin} = require('./middlewares/CheckInfoLogin.js')
const {GerToken} = require('./middlewares/GerToken.js')


router.post('/Register', CheckInformation, RegistrationController) 
router.post('/Login',CheckInfoLogin, GerToken, Login)

module.exports = router