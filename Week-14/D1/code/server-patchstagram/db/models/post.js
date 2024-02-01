'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    caption: DataTypes.STRING,
    author: DataTypes.INTEGER,
    image: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User,  { foreignKey: 'author' })
  };
  return Post;
};