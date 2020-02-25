'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clips = sequelize.define('Clips', {
    source_video_id: DataTypes.STRING,
    creator_id: DataTypes.STRING,
    start_timestamp: DataTypes.STRING,
    end_timestamp: DataTypes.STRING
  }, {});
  Clips.associate = function(models) {
    // associations can be defined here
  };
  return Clips;
};