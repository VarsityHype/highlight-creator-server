'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    owner_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Playlists.associate = function(models) {
    Playlists.belongsToMany(models.Clips, {
      through: 'Playlist_Clips',
      as: 'playlists',
      foreignKey: 'playlist_id',
      otherKey: 'clip_id'
    })
    Playlists.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'owner_id'
    })
  };
  
  return Playlists;
};