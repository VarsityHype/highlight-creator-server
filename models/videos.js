'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    uploader_id: DataTypes.INTEGER,
    azure_url: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Videos.associate = function(models) {
    Videos.hasMany(models.Clips, {
      as: 'Clips',
      foreignKey: 'og_video_id'
    })
    Videos.hasMany(models.comments, {
      as: 'comments',
      foreignKey: 'video_id'
    })
    Videos.hasMany(models.reactions, {
      as: 'reactions',
      foreignKey: 'video_id'
    })
    Videos.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'uploader_id'
    })
  };
  return Videos;
};