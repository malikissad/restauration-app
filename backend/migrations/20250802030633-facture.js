'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('facture', { 
  id_facture:{
          type: Sequelize.INTEGER,
          primaryKey: true
      },
      addition:{
          type: Sequelize.INTEGER,
          allowNull: false
      }  
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('facture');
  }
};
