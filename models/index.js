const User = require('./User');
const Post = require('./Post');
const Note = require('./Note');

User.hasMany(Post, {foreignKey: "uid"});
Post.belongsTo(User, {foreignKey: "uid"});
Post.hasMany(Note, {foreignKey: "pid"});
Note.belongsTo(Post, {foreignKey: "pid"});


module.exports = { User, Post, Comment };