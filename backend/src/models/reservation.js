const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')

const reservation = sequelize.define('Reservation', {
    num_res:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nom_res:{
        type : DataTypes.STRING,
        allowNull:false, 
    },
    heure_res:{
        type: DataTypes.TIME,
        allowNull: false 
    },
    Date_res:{
        type : DataTypes.DATE,
        allowNull : false
    }
})

module.exports = {reservation}