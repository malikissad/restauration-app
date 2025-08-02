const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')
const { SELECT } = require('sequelize/lib/query-types')

const Server = sequelize.define('Server', {
    id_serveur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    fullName : {
    type: DataTypes.STRING,
    allowNull: false
    }
})

module.exports = {Server}