exports.Stat = function(req,res){
    // return res.json(res.locals.count)
    return res.status(200).json({
        "table occuppées" : res.locals.countOcuppe, 
        "commande active" : res.locals.countActive, 
        "commande En attente": res.locals.countEnAttente,
        "saleDay": res.locals.saleDay
    })
}