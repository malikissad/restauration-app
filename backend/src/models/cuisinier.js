const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')

const cuisinier = sequelize.define('cuisinier', {
    id_cuisinier: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fullName:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {cuisinier}