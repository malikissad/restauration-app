const db = require('../../../models/index.js')
const {Op} = require('sequelize')
const dayjs = require('dayjs')

async function CommandeActive (req, res, next){
    try{
        const countActive = await db.commande.count({where: {status : 'En Préparation'}})
        const countEnAttente= await db.commande.count({where: {status : 'En Attente'}})
        
        res.locals.countActive = countActive
        res.locals.countEnAttente = countEnAttente
        next()

    }catch(err){
        return res.status(401).json(err.message)
    }
}

module.exports = {CommandeActive}