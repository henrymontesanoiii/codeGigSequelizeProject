const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require ('body-parser');
const path = require ('path');
const db = require('./config/connection');

db.authenticate()
.then(() => console.log('Database connected ...'))
.catch(err => console.log('Error:' + err));





const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


const PORT = process.env.PORT || 3001;


  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

