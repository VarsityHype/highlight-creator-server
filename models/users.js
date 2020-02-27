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
      foreignKey: 'owner_id'
    })
    Users.hasMany(models.Videos, {
      as: 'Videos',
      foreignKey: 'uploader_id'
    })
    Users.hasMany(models.Clips, {
      as: 'Clips',
      foreignKey: 'creator_id'
    })
    Users.hasMany(models.comments, {
      as: 'comments',
      foreignKey: 'commenter_id'
    })
    Users.hasMany(models.reactions, {
      as: 'reactions',
      foreignKey: 'reactor_id'
    })
  };
  
  return Users;
};