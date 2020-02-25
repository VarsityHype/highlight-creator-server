'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Videos', 'description', {
      type: Sequelize.STRING,
      allowNull: true,
      onDelete: 'CASCADE'
      })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Videos', 'description')

  }
};
