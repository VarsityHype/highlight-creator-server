'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clips = sequelize.define('Clips', {
    source_video_id: DataTypes.STRING,
    creator_id: DataTypes.STRING,
    start_timestamp: DataTypes.STRING,
    end_timestamp: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});

  Clips.associate = function(models) {
    Clips.belongsToMany(models.Playlists, {
      through: 'Playlist_Clips',
      as: 'playlists',
      foreignKey: 'clip_id',
      otherKey: 'playlist_id'
    })
    Clips.belongsTo(models.Videos, {
      as: 'Videos',
      foreignKey: 'video_id'
    })
    Clips.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'user_id'
    })
  };

  return Clips;
};