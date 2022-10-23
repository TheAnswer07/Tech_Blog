const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {foreignKey: "uid"});
Post.belongsTo(User, {foreignKey: "uid"});


module.exports = { User, Post };