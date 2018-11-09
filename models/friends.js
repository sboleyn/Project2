"use strict";
module.exports = function (sequelize, DataTypes) {
    
    //Model for Friends 
    var Friend = sequelize.define("Friend", {
        //Parameters for the User model
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        friend_id: { type: DataTypes.INTEGER, foreignKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
    });
    

    Friend.associate = function (models) {
        Friend.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: "friendId"
        });
    };

    return Friend;
};
