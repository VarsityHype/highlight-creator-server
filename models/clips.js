'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clips = sequelize.define('Clips', {
    source_video_id: DataTypes.STRING,
    creator_id: DataTypes.STRING,
    start_timestamp: DataTypes.STRING,
    end_timestamp: DataTypes.STRING
  }, {});

  Clips.associate = function(models) {
    Clips.belongsToMany(models.Playlists, {
      through: 'Playlist_Clips',
      as: 'playlists',
      foreign_key: 'clip_id',
      other_key: 'playlist_id'
    })
    Clips.belongsTo(models.Videos, {
      as: 'Videos',
      foreign_key: 'id'
    })
    Clips.belongsTo(models.Users, {
      as: 'Users',
      foreign_key: 'id'
    })
  };

  return Clips;
};