"use strict";
module.exports = function (sequelize, DataTypes) {
    
    //Model for Friends 
    var Rating = sequelize.define("Rating", {
        //Parameters for the User model
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true 
        },
        
        movie_id: { type: DataTypes.INTEGER, foreignKey: true, autoIncrement: true 
        },

        rating: { type: DataTypes.INTEGER, allowNull: false 
        },

    });

    Rating.associate = function (models) {
        Rating.belongsTo(models.Movie, {
            onDelete: "CASCADE",
            foreignKey: "movieId"
            as: "ratings"
        });
    };

    return Rating;
};
