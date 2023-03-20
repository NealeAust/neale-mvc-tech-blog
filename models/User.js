const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Use bcrypt for passwrd hashing
const bcrypt = require('bcrypt');


// Set up fields and rules for Comment model.
class User extends Model {

    // Run on a instance data (per user) to check password.
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        // Define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be >=8 characters long.
                len: [8],
            },
        },


        // Set up a beforeCreate & beforeUpdate lifecycle hook to hash password before object created in the database
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

// Export the model
module.exports = User;