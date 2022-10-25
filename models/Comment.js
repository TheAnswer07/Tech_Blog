const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Comment extends Model { }
Comment.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{sequelize, modelName: "comment"});


module.exports = Comment;