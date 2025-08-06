const db = require('../../../models/index.js')
async function TableOcuppe (req,res,next){
   try{
    const countTableOccupe = await db.Table.count({ where: {status: 'occupée'}})
    res.locals.countOcuppe = countTableOccupe
    next()
   }catch(err){
    return res.status(401).json(err.message)
   }
}


module.exports = {TableOcuppe}