'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Videos', // name of Source model
      'user_id', // name of the key we're adding 
      {
        type: Sequelize.STRING,
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        foreignKey: true
      }
    );
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Videos', // name of Source model
      'user_id' // key we want to remove
    );
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
