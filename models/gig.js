
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Gig = sequelize.define("gig", {
    title: Sequelize.STRING,
    technologies: Sequelize.STRING,
    budget: Sequelize.INTEGER,
    description: Sequelize.STRING,
    contact_email: Sequelize.STRING,
});

// Syncs with DB
Gig.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Gig;
