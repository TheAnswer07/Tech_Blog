const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {foreignKey: "uid"});
Post.belongsTo(User, {foreignKey: "uid"});
Comment.belongsTo(Comment, {foreignKey: "uid"});


module.exports = { User, Post, Comment };