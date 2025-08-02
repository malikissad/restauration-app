'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CommandePlat', { 
    id_comm: {
      type: Sequelize.INTEGER,
      references: {
        model: 'commande',
        key: 'id_comm'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
     },
     
     nom_palt: {
        type: Sequelize.STRING,
        references: {
          model: 'plat',
          key: 'nom_palt'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },

     });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CommandePlat');
  }
};
