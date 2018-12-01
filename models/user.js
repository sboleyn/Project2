"use strict";
module.exports = function (sequelize, DataTypes) {
    //"User" model
    var User = sequelize.define("User", {
        //Perameters for the User model
        name: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false }
    });

    User.create({ name: "Derek", password: 'tagis#1', gender: "guy", genre: "comedy", location: "Tucson, AZ" });
    
    // Associating "User" with "Friends"
    User.associate = function (models) {
        User.hasMany(models.Friend, {
            onDelete: "CASCADE"
        });
    };
    return User;
};