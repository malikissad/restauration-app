const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')
const {Table} = require('./table.js')


const commande = sequelize.define('commande',{
    id_comm :{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    status :{
        type : DataTypes.ENUM('En Préparation', 'En Attente', 'Servie'),
        allowNull: false,
    },
    description :{
        type : DataTypes.STRING,
        allowNull: false
    },
    data_Comm : {
        type : DataTypes.DATE,
        allowNull:false
    },
    heure_Comm : {
       type: DataTypes.TIME,
       allowNull : false
    },
    addition: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
},
{
    tableName: 'commande',
    timestamps: false
})

commande.associate = function(models){
    commande.hasOne( Table, {foreignKey: 'id_comm'})
}

module.exports = {commande}