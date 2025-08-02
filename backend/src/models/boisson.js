const {DataTypes} = require('sequelize')
const sequelize = require('../config/db.js')

const Boisson = sequelize.define('Boisson',{
    nom_boisson: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    type: {
        type: DataTypes.ENUM('jus', 'gazeau', 'café', 'thé'),
        allowNull: false
    },
    prix:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quentite:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = {Boisson}