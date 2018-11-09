var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    return res.render("./public/index.html");
  });

  app.get("/profile/:id", function(req,res) {
    db.User.findByID(req.params.id).then(function(userData) {
      res.render("profile", {
        userData: userData
      });
    });
  });

  app.get("/search", function(req, res) {
    return res.render("./public/search.html");
  });

  // Load example page and pass in an example by id
  app.get("/search/:name", function(req, res) {
    db.Friends.findAll({ where: {
      name: { 
        [Op.like]: req.params.name 
      }
    } }).then(function(UsersData) {
      res.render("searchResults", {
        example: UsersData
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    return res.render("404");
  });
};
