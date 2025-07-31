'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Users', {
          id_users:{
              type : Sequelize.INTEGER,
              primaryKey: true,
          },
          username:{
             type: Sequelize.STRING,
             allowNull: false,
             unique: true
            },
          Email: {
              type : Sequelize.STRING,
              allowNull : false,
            },
          name:{
              type : Sequelize.STRING,
              allowNull: false,
             },
          role:{
              type : Sequelize.ENUM('gerant', 'serveur', 'cuisinier', 'caissier'),
              allowNull: false
          },
          password:{
              type : Sequelize.STRING,
              allowNull : false
          }
      });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
