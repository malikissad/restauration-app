"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("historique", {
      id_comm: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      date_comm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      heure_comm: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      id_serveur: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      num_tab: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      id_facture: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      addition: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("historique");
  },
};
