'use strict';
module.exports = (sequelize, DataTypes) => {
  const Videos = sequelize.define('Videos', {
    uploader_id: DataTypes.INTEGER,
    azure_url: DataTypes.STRING
  }, {});
  Videos.associate = function(models) {
    // associations can be defined here
  };
  return Videos;
};