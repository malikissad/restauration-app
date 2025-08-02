'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('server', { 
     
      id_serveur: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      
      fullName : {
      type: Sequelize.STRING,
      allowNull: false
      }
     });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('server');
  }
};
