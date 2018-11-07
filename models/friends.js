//Dependency
var Sequelize = require("sequelize");

//Connection setup
var sequelize = new Sequelize("project2_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
});

var Friend = this.sequelize.define("friend", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: {}
});

Friend.belongsTo(this.User, {
    foreignKey: "primaryFriend",
    constraints: false,
    as: "friendship"
});
