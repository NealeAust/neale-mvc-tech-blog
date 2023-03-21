// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js
const sequelize = require('../config/connection');

// Set up fields and rules for Comment model.
class Comment extends Model {}

Comment.init(
    {
        // Define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences: {
                model: 'post',
                key: 'id',
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Comment must be at least one character long.                
                len: [1],
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    });

// Export the model
module.exports = Comment;