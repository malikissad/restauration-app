const {Sequelize} = require('sequelize')


const sequelize = new Sequelize("RestoManager", "postgres", "database",{
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize
