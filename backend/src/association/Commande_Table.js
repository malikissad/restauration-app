const {commande} = require('../models/commande')
const {table} = require('../models/table')


function AssCommandeTable(){
table.hasOne( commande,{ foreignKey: 'id_Comm'})
commande.belongsTo( table,{ foreignKey: 'id_Comm'})
}

module.exports = { AssCommandeTable}