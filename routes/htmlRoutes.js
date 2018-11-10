var db = require("../models");
var friendsData = require("../models/friends");
var Op = db.Sequelize.Op;

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        return res.sendFile("index.html");
    });  

    app.post("/profile/:name", function(req, res) {
        db.User.findOne({
            where: {
                name: req.params.name 
            }
        }).then(function(userData) {
            console.log(userData)
            return res.render("profile",userData);
        }); 
    });

    app.get("/userprofile", function(req,res) {
        db.User.findOne({
            where: {
                name: "Derek"
            }
        }).then(function(userData) {
            db.Friend.findAll({}).then(function (dbFriends) {
                db.Rating.findAll({}).then(function (ratings) {
                    data = {
                        user: userData,
                        friends: dbFriends,
                        ratings: ratings
                    };
                    return res.render("profile", data)
                })
              });
        });
    })

    app.get("/search", function(req, res) {
        return res.render("search");
    });

    // Load example page and pass in an example by id
    app.get("/search/:name", function(req, res) {
        db.Friends.findAll({
            where: {
                name: {
                    [Op.like]: req.params.name
                }
            }
        }).then(function(UsersDat) {
            res.render("searchResults", {
                example: friendsData
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};