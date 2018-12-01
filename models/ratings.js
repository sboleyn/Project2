"use strict";
module.exports = function (sequelize, DataTypes) {
    
    //Model for Friends 
    var Rating = sequelize.define("Rating", {
        //Parameters for the User model

        
        imdbID: { type: DataTypes.STRING, allowNull: false },

        
        ratingNumber: { type: DataTypes.INTEGER, allowNull: false },
    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.Movie, {
            onDelete: "CASCADE"
        });
    };

    return Rating;
};
