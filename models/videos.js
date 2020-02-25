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
      foreign_key: 'og_video_id'
    })
    Videos.belongsTo(models.Users, {
      as: 'Users',
      foreign_key: 'id'
    })
  };
  return Videos;
};