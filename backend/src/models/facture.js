const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')

const Facture = sequelize.define('Facture', {
    id_facture:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    addition:{
        type: DataTypes.INTEGER,
        allowNull: false
    } 
})

module.exports = {Facture}