'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reservation', { 
    num_res:{
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
    nom_res:{
            type : Sequelize.STRING,
            allowNull:false, 
        },
    heure_res:{
            type: Sequelize.TIME,
            allowNull: false 
        },
    Date_res:{
            type : Sequelize.DATE,
            allowNull : false
        },

    num_tab: {
          type: Sequelize.INTEGER,
          references:{
            model: 'table',
            key: 'num_tab'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }

     });
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('reservation');
    }
};
