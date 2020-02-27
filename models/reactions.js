'use strict';
module.exports = (sequelize, DataTypes) => {
  const reactions = sequelize.define('reactions', {
    type: DataTypes.STRING,
    video_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  reactions.associate = function(models) {

    reactions.belongsTo(models.Users, {
      as: 'Users',
      foreign_key: 'user_id'
    })

    reactions.belongsTo(models.Videos), {
      as: 'Videos',
      foreign_key: 'video_id'
    })
  };
  return reactions;
};