"use strict";
module.exports = function (sequelize, DataTypes) {

    //Model for Friends 
    var Friend = sequelize.define("Friend", {
        //Parameters for the User model
        name: { type: DataTypes.STRING, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },

    });
    Friend.associate = function (models) {
        Friend.belongsTo(models.User, {
            onDelete: "CASCADE"
        });
    };



    Friend.bulkCreate([
        {

            name: "Keith",
            gender: "guy",
            genre: "drama",
            location: "Tucson, AZ"
        },
        {
            name: "Berte",
            gender: "fluid",
            genre: "action",
            location: "Detroit, MI"
        },
        {
            name: "Devon",
            gender: "chik",
            genre: "romance",
            location: "San Diego, CA"
        },
        {
            name: "Anna",
            gender: "lady",
            genre: "fantasy",
            location: "Portland, OR"
        }
    ])


    return Friend;
};
