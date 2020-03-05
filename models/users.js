'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  users.associate = function(models) {
    users.hasMany(models.Playlists, {
      as: 'Playlists',
      foreignKey: 'owner_id'
    })
    users.hasMany(models.Videos, {
      as: 'Videos',
      foreignKey: 'uploader_id'
    })
    users.hasMany(models.Clips, {
      as: 'Clips',
      foreignKey: 'creator_id'
    })
  };
  
  return users;
};