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
    
    Friends
        .sync({ force: true })
        .then(function () {
            Friends.bulkCreate([
                {
                    id: "",
                    friend_id: "",
                    name: "Keith",
                    gender: "guy",
                    genre: "drama",
                    location: "Tucson, AZ"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Berte",
                    gender: "fluid",
                    genre: "action",
                    location: "Detroit, MI"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Devon",
                    gender: "chik",
                    genre: "romance",
                    location: "San Diego, CA"
                },
                {
                    id: "",
                    friend_id: "",
                    name: "Anna",
                    gender: "lady",
                    genre: "fantasy",
                    location: "Portland, OR"
                },
            ],
            )
        });

    Friend.associate = function (models) {
        Friend.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: "friendId"
        });
    };

    return Friend;
};
