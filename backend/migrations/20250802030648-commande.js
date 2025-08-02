'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('commande', { 
    id_comm :{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    status :{
        type : Sequelize.ENUM('En Préparation', 'En Attente', 'Servie'),
        allowNull: false,
    },
    description :{
        type : Sequelize.STRING,
        allowNull: false
    },
    data_Comm : {
        type : Sequelize.DATE,
        allowNull:false
    },
    heure_Comm : {
       type: Sequelize.TIME,
       allowNull : false
    },


    num_tab:{
      type: Sequelize.INTEGER,
      references: {
        model: 'table',
        key: 'num_tab'
      },
      onDelete:'CASCADE',
      onUpdate: 'CASCADE'
    }, 
    id_serveur: {
      type: Sequelize.INTEGER,
      references: {
        model: 'server',
        key: 'id_serveur'
      },
      onDelete:'CASCADE',
      onUpdate: 'CASCADE'
    },
    id_facture: {
      type: Sequelize.INTEGER,
      references: {
        model: 'facture',
        key: 'id_facture'
      },
      onDelete:'CASCADE',
      onUpdate: 'CASCADE'
    }
     });

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('commande');
  }
};
