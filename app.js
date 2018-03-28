var express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//gets everything in routes and puts into variable named routes
var routes = require ('./routes');

//app will look in public directory for all static assets
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//routes start here

//first is the home route
app.get('/', routes.home);

//movie route by number
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// route for no found response (must be below above or will take precedence)
app.get('*', routes.notFound);

app.listen(3000, function () {
    console.log('App is running.')
});