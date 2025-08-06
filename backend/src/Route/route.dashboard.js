const routerD = require('express').Router()
const {Stat} = require('../controlleurs/dashboard/stat.js')
const {TableOcuppe} = require('../middlewares/dashboard/TableOccupe.js')
const {CommandeActive} = require('../middlewares/dashboard/CommandeActive.js')


routerD.get('/stat',TableOcuppe,CommandeActive,Stat)

module.exports = routerD