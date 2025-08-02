'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('boisson', { 
    nom_boisson: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    type: {
        type: Sequelize.ENUM('jus', 'gazeau', 'café', 'thé'),
        allowNull: false
    },
    prix:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quentite:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('boisson');
  }
};
