"use strict";
module.exports = function (sequelize, DataTypes) {
    //"User" model
    var User = sequelize.define("User", {
        //Perameters for the User model
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false }
    });

    // Associating "User" with "Friends"
    User.associate = function (models) {
        User.hasMany(models.Friends, {
            onDelete: "CASCADE",
            foreignKey: "friendId",
            as: "friends"
        });
    };
    return User;
};