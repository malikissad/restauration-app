'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CommandeBoisson', { 
     id_comm: {
      type: Sequelize.INTEGER,
      references: {
        model: 'commande',
        key: 'id_comm'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
     },

     nom_boisson: {
        type: Sequelize.STRING,
        references: {
          model: 'boisson',
          key: 'nom_boisson'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CommandeBoisson');
    
  }
};
