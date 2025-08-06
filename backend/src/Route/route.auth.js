const {RegistrationController} = require('../controlleurs/auth/registration.js')
const {CheckInformation} = require('../middlewares/auth/CheckInformation.js')
const router = require('express').Router()
const {Login}  = require('../controlleurs/auth/login.js')
const {CheckInfoLogin} = require('../middlewares/auth/CheckInfoLogin.js')
const {GerToken} = require('../middlewares/auth/GerToken.js')
const {CheckRefreshToken} = require('../middlewares/auth/CheckRefreshToken.js')
const {GenrAccessToken} = require("../middlewares/auth/GenrAccessToken.js")
const {Refresh} = require('../controlleurs/auth/refresh.js')

router.post('/Register', CheckInformation, RegistrationController) 
router.post('/Login',CheckInfoLogin, GerToken, Login)
router.post('/refresh',CheckRefreshToken, GenrAccessToken, Refresh)

module.exports = router