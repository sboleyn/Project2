var db = require("../models");
var friendsData = require("../models/friends");
var Op = db.Sequelize.Op;

module.exports = function(app) {
    // Load index page
    app.locals.username = "Derek";
    app.get("/", function(req, res) {
        return res.sendFile("index.html");
    });  

    app.post("/profile/:name", function(req, res) {
        db.User.findOne({
            where: {
                name: req.params.name 
            }
        }).then(function(userDat) {
            console.log(userData)
            return res.render("profile",friendsData);
        }); 
    });

    app.get("/userprofile", function(req,res) {
        db.User.findOne({
            where: {
                name: req.app.locals.name
            }
        }).then(function(userDat) {
            return res.render("profile", friendsData)
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