'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    owner_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Playlists.associate = function(models) {
    // associations can be defined here
  };
  return Playlists;
};