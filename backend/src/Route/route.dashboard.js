const routerD = require('express').Router()
const {Stat} = require('../controlleurs/dashboard/stat.js')
const {TableOcuppe} = require('../middlewares/dashboard/TableOccupe.js')
const {CommandeActive} = require('../middlewares/dashboard/CommandeActive.js')
const {SaleDay} = require('../middlewares/dashboard/SaleDay.js')

routerD.get('/stat',TableOcuppe,CommandeActive, SaleDay, Stat)

module.exports = routerD