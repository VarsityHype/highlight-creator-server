'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist_Clips = sequelize.define('Playlist_Clips', {
    playlist_id: DataTypes.INTEGER,
    clip_id: DataTypes.INTEGER
  }, {});
  Playlist_Clips.associate = function(models) {
    // associations can be defined here
  };
  return Playlist_Clips;
};