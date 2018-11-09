var db = require("../models");
var userData = require("../data/users");
var Op = db.Sequelize.Op;

module.exports = function(app) {
    // Load index page
    app.locals.username = "Derek";
    app.get("/", function(req, res) {
        return res.sendFile("index.html");
    });  

    app.post("/profile/:username", function(req, res) {
        db.User.findOne({
            where: {
                name: req.params.username 
            }
        }).then(function(userData) {
            return res.render("profile",userData);
        }); 
    });

    app.get("/userprofile", function(req,req) {
        db.User.findOne({
            where: {
                name: req.app.locals.username
            }
        }).then(function(userData) {
            return res.render("profile", userData)
        })
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
        }).then(function(UsersData) {
            res.render("searchResults", {
                example: UsersData
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};