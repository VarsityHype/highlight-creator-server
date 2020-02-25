'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  
  Users.associate = function(models) {
    Users.hasMany(models.Playlists, {
      as: 'Playlists',
      foreign_key: 'owner_id'
    })
    Users.hasMany(models.Videos, {
      as: 'Videos',
      foreign_key: 'uploader_id'
    })
    Users.hasMany(models.Clips, {
      as: 'Clips',
      foreign_key: 'creator_id'
    })
  };
  
  return Users;
};