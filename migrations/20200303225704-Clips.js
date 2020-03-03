'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source_video_id: {
        type: Sequelize.STRING
      },
      creator_id: {
        type: Sequelize.STRING
      },
      start_timestamp: {
        type: Sequelize.FLOAT
      },
      end_timestamp: {
        type: Sequelize.FLOAT
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clips');
  }
};