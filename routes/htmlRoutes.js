var Gig = require("../models/gig");
module.exports = function(app) {
  // Load index page
  app.get('/', function(req, res) {
    console.log('Home');
    res.send('Home');
    
  });
  app.get("/gigs", function(req, res) {
    Gig.findAll({}).then(function(results) {

      res.json(results);
    })
    .catch(err => console.log("Error:" + err));;
  });
 
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
