var Gig = require("../models/gig");
module.exports = function(app) {
  //Get all gigs and return as JSON
  app.get("/gigs", function(req, res) {
    Gig.findAll({}).then(function(results) {
      console.log(results);
      res.json(results);
    })
    .catch(err => console.log("Error:" + err));;
  });

  //Add gig to database
  app.get("/add", function(req, res) {
    const data = {
      title:' Sql Developer',
      technologies: 'Sql',
      budget: 50000,
      description: 'Knowledge of Sql',
      contact_email: 'jobs@sql.com'
    };
    let {title, technologies, budget, description, contact_email} = data;
    Gig.create({
      title: title,
      technologies: technologies,
      budget: budget,
      description: description,
      contact_email: contact_email
    }).then(function(newGig) {
      console.log(newGig);
      res.redirect('gigs');
    })
    .catch(err => console.log("Error:" + err));;
  });
 
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.send("404");
  });
};
