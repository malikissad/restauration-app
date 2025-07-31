const {DataTypes , Sequelize} = require('sequelize')
const sequelize = require('../config/db.js')

const Users = sequelize.define('Users',{

    id_users:{ type : DataTypes.INTEGER, primaryKey: true,},
    username:{type: DataTypes.STRING, allowNull: false, unique: true},
    Email: { type : DataTypes.STRING, allowNull : false},
    name:{type : DataTypes.STRING,allowNull: false,},
    role:{type : DataTypes.ENUM('gerant', 'serveur', 'cuisinier', 'caissier'),allowNull: false},
    password:{type : DataTypes.STRING,allowNull : false}

}, 
{
    tableName: 'Users',
    timestamps: false,
})

module.exports = {Users} 