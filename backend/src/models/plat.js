const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')

const Plat = sequelize.define('Plat', {
    nom_palt: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ing_plat:{
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('Entrées', 'Plats', 'Désserts'),
        allowNul: false
    }
})

module.exports = {Plat}