const db = require('../../../models/index.js')
const dayjs = require('dayjs')
const { fn, col, where } = require('sequelize')

async function SaleDay(req,res,next) {

    try{
        const date = dayjs().format('YYYY-MM-DD')
        // const saleDay = dayjs().format('YYYY-MM-DD')
        const saleDay = await db.historique.sum('addition', {
            where : where(fn('DATE', col('date_comm')),date)
        })
        res.locals.saleDay = saleDay
        next()
    }catch(err){
return res.status(401).json(err.message)
    }
}

module.exports = { SaleDay} 