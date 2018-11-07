//Dependency
var Sequelize = require("sequelize");

//Connection setup 
var sequelize = new Sequelize("project2_db", "root", "password", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
});

//Connection test (SUCCESSFUL)
// sequelize
//     .authenticate ()
//     .then(() => {
//         console.log("Connection successful");
//     })
//     .catch(err => {
//         console.error("Unable to connect:", err);
//     });

//Model for User table in mySQL
var User = this.sequelize.define("user", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    gender: { type: Sequelize.STRING, allowNull: false },
    genre: { type: Sequelize.STRING, allowNull: false },
    location: { type: Sequelize.STRING, allowNull: false },
});

User.hasMany(this.Friends, {
    foreignKey: "friend_id",
    constraints: false,
    scope: {
        commentable: "friendship"
    },
});

//Creation of the table data (using bulkCreate)
User
    .sync({ force: true })
    .then(function () {
        user.bulkCreate([
            {
                id: "",
                name: "Derek",
                password: "tagis#1",
                gender: "guy",
                genre: "comedy",
                location: "Tucson, AZ"
            },
            {
                id: "",
                name: "Keith",
                password: "codingwizard",
                gender: "guy",
                genre: "drama",
                location: "Tucson, AZ"
            },
            {
                id: "",
                name: "Berte",
                password: "purplequeen",
                gender: "fluid",
                genre: "action",
                location: "Detroit, MI"
            },
            {
                id: "",
                name: "Devon",
                password: "guitarplayer",
                gender: "chik",
                genre: "romance",
                location: "San Diego, CA"
            },
            {
                id: "",
                name: "Anna",
                password: "harrypotter4L",
                gender: "lady",
                genre: "fantasy",
                location: "Portland, OR"
            },
        ], {
                validate: false,
            }).then(function () {
            })
    });

User.findAll().then(user {
    console.log(user)
})

sequelize.sync();