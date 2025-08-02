const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')
const {commnade} = require('./commande.js')

const Table = sequelize.define('Table',{
   num_tab :{
    type : DataTypes.INTEGER,
    primaryKey: true
   },
   nb_place :{
     type : DataTypes.INTEGER,
     allowNull: false,
   },
   status : {
     type : DataTypes.ENUM('reservé', 'servie', 'occupée')
   },
   id_comm: {
    type: DataTypes.INTEGER,
    unique: true
   }
},
{
  tableName: 'table',
  timestamps: false 
}
)
Table.associate = function(models){
  Table.belongsTo( commnade, {foreignKey: 'id_comm'})
}

module.exports = {Table}