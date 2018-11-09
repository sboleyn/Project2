"use strict";
module.exports = function (sequelize, DataTypes) {
    
    //Model for Friends 
    var Rating = sequelize.define("Rating", {
        //Parameters for the User model
        ratingId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        
        imdbID: { type: DataTypes.STRING, allowNull: false },
        
        userID: { type: DataTypes.INTEGER, allowNull: false },
        
        ratingNumber: { type: DataTypes.INTEGER, allowNull: false },
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.Movie, {
            onDelete: "CASCADE",
            foreignKey: "movieId",
            as: "ratings"
        });
    };

    return Rating;
};
