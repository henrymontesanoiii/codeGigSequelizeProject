const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require ('body-parser');
const path = require ('path');
const db = require('./config/connection');

db.authenticate()
.then(() => console.log('Database connected ...'))
.catch(err => console.log('Error:' + err));





const app = express();

//handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get('/', function (req, res){
  res.render('index', {layout: 'landing'})
});



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

