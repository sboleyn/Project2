//Dependency
var Sequelize = require("sequelize");

var sequelize = new Sequelize("project2_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
});

//Model for User table in mySQL
var User = sequelize.define("user", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: 
    
    (id) associate: (models) => {
        User.hasMany(models.Friends, {
            foreignKey: "primaryFriend",
            constraints: ,
            scope: {

            },
        });
    },
});

//Creation of the table data (using bulkCreate)
User
    .sync({ force: true })
    .then(function() {
        user.bulkCreate([
            {
                id: "",
                name: "Derek",
                password: "tagis#1",
                gender: "guy",
                genre: "comedy",
                location: "Tucson, AZ"
            },
 

User.findAll().then(user {
    console.log(user)
})

sequelize.sync();