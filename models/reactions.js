'use strict';
module.exports = (sequelize, DataTypes) => {
  const reactions = sequelize.define('reactions', {
    type: DataTypes.STRING,
    video_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  reactions.associate = function(models) {

    models.reactions.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'user_id'
    })

    models.reactions.belongsTo(models.Videos), {
      as: 'Videos',
      foreignKey: 'video_id'
    })
  };
  return reactions;
};