'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    comment_body: DataTypes.STRING,
    comment_time: DataTypes.STRING,
    comment_votes: DataTypes.INTEGER,
    commenter_name: DataTypes.STRING,
    comment_id: DataTypes.INTEGER
  }, {});
  comments.associate = function(models) {
    comments.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'user_id'
    })
    comments.belongsTo(models.Videos, {
      as: 'Videos',
      foreignKey: 'video_id'
    })
  };
  return comments;
};