"use strict";
module.exports = function (sequelize, DataTypes) {
    
    //Model for Movie table in mySQL
    var Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imdbID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Rated: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Plot: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Poster: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imdbRating: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

    });

    Movie.associate = function (models) {
        Movie.hasMany(models.Ratings, {
            onDelete: "CASCADE",
            foreignKey: "movieId",
            as: "movies"
        });
    };

    return Movie;
};