'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('plat', { 
    nom_palt: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    ing_plat:{
        type: Sequelize.STRING,
        allowNull: false
    },
    prix: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status:{
        type: Sequelize.ENUM('Entrées', 'Plats', 'Désserts'),
        allowNul: false
    },

    id_cuisinier: {
      type: Sequelize.INTEGER,
      references: {
        model: 'cuisinier',
        key: 'id_cuisinier'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }

     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('plat');
  }
};
