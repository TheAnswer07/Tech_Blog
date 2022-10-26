const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {foreignKey: "uid"});
Post.belongsTo(User, {foreignKey: "uid"});
Post.hasMany(Comment, {foreignKey: "pid"});
Comment.belongsTo(Post, {foreignKey: "pid"});


module.exports = { User, Post, Comment };