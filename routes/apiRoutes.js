var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/friends", function (req, res) {
    db.Friend.findAll({}).then(function (dbFriends) {
      res.json(dbFriends);
    });
  });

  // Create a new example
  app.post("/api/friends", function (req, res) {
    db.Friend.create(req.body).then(function (dbFriend) {
      res.json(dbFriend);
    });
  });


//Stuff below this line is a mystery--might help solve our JSON-->DB question/issue
  var movie = $(this).attr("data-name");
  var queryOMDB = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/myfile.html'));
  });

  app.post('/', function (req, res) {

    var jsondata = req.body;
    var values = [];

    for (var i = 0; i < jsondata.length; i++)
      values.push([jsondata[i].name, jsondata[i].age]);

    //Bulk insert using nested array [ [a,b],[c,d] ] will be flattened to (a,b),(c,d)
    connection.query('INSERT INTO members (name, age) VALUES ?', [values], function (err, result) {
      if (err) {
        res.send('Error');
      }
      else {
        res.send('Success');
      }
    });
  });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });
};
