const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require ('body-parser');
const path = require ('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});