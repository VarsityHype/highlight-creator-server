'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlistrelations = sequelize.define('playlistrelations', {
    playlist_reference_id: DataTypes.STRING,
    source_id: DataTypes.STRING,
    isClip: DataTypes.BOOLEAN
  }, {});
  playlistrelations.associate = function(models) {
    // associations can be defined here
  };
  return playlistrelations;
};