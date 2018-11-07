"use strict";
module.exports = function (sequelize, DataTypes) {

    //Model for User table in mySQL
    var Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
        },

        title: {
            type: DataTypes.STRING, allowNull: false
        },

    });

    Movie.associate = function (models) {
        Movie.hasMany (models.Ratings, {
            onDelete: "CASCADE",
            foreignKey: "movieId",
            as: "movies"
        });
    };

    return Movie;
};