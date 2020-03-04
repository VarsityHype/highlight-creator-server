'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Clips', 'title',{
      type: Sequelize.STRING
    })
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Clips', 'title')
  }
};
