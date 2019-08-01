var Gig = require("../models/gig");


module.exports = function(app) {
  // Get all books
  app.get("/gigs", function(req, res) {
    Gig.findAll({}).then(function(results) {
      console.log(results);
      res.json(results);
    })
    .catch(err => console.log("Error:" + err));;
  });
};

