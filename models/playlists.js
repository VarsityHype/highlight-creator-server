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
      foreign_key: 'playlist_id',
      other_key: 'clip_id'
    })
    Playlists.belongsTo(models.Users, {
      as: 'Users',
      foreign_key: 'id'
    })
  };
  
  return Playlists;
};