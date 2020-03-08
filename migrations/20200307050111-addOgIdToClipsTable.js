'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Clips', 'og_video_id',{
      type: Sequelize.INTEGER,
      allowNull: true
    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Clips', 'og_video_id')
  }
};
