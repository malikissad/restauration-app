'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('table', { 
      num_tab :{
      type : Sequelize.INTEGER,
      primaryKey: true
     },
     nb_place :{
       type : Sequelize.INTEGER,
       allowNull: false,
     },
     status : {
       type : Sequelize.ENUM('reservé', 'servie', 'occupée')
     },

     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('table');
  }
};
