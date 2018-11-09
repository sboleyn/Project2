var db = require("../models");

module.exports = function (app) {
  ////////////////////
  // Friends
  ///////////////////  

  // Get all friends
  app.get("/api/friends", function (req, res) {
    db.Friend.findAll({ where: { id: 1 } }).then(function (dbFriends) {
      res.json(dbFriends);
    });
  });

  // Create a new friend
  //   app.post("/api/friend", function (req, res) {
  //     db.Friend.create(req.body).then(function (dbMovie) {
  //       res.json(dbFri);
  //     });
  //   });

  ///////////////////
  // Movies
  ///////////////////

  //Get one movie by title
  app.get("/api/movies", function (req, res) {
    db.Movie.findOne({ where: {title: ''} }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  //Get all movies 
  app.get("/api/movies", function (req, res) {
    db.Movie.findAll({}).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  //Post a movie to the DB 
  app.post("/api/movie", function (req, res) {
    db.Movie.create(req.body).then(function (dbMovie) {
      res.json(dbMovie);
    });
  });

  /////////////////
  // Ratings
  ////////////////

  //Get all ratings for a movie
  app.get("/api/ratings", function (req, res) {
    db.Rating.findAll({}).then(function (dbRating) {
      res.json(dbRating);
    });
  });

  // Post a rating to a movie by user

  // Find a rating for a movie by user



  //Stuff below this line is a mystery--might help solve our JSON-->DB question/issue
  // var movie = $(this).attr("data-name");
  // var queryOMDB = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  // app.get('/', function (req, res) {
  //   res.sendFile(path.join(__dirname + '/myfile.html'));
  // });

  // app.post('/', function (req, res) {

  //   var jsondata = req.body;
  //   var values = [];

  //   for (var i = 0; i < jsondata.length; i++)
  //     values.push([jsondata[i].name, jsondata[i].age]);

  //   //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
  //   connection.query('INSERT INTO members (name, age) VALUES ?', [values], function (err, result) {
  //     if (err) {
  //       res.send('Error');
  //     }
  //     else {
  //       res.send('Success');
  //     }
  //   });
  // });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
}