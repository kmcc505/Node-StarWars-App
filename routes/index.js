var moviesJSON = require('../movies.json');


//routes start here
//first is the home route
exports.home = function (req, res) {
var movies = moviesJSON.movies;

    res.render('home', {
        title: "Star Wars",
        movies: movies
    });
};

//movie_single route by number
exports.movie_single = function (req, res) {
    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;

    if (episode_number >= 1 && episode_number <= 9) { 
    var movie = movies[episode_number-1]; //minus one because arrays start at 0 not 1 
    var title = movie.title;
    var main_characters = movie.main_characters;
    res.render('movie_single.ejs', {
        movies: movies,
        title: title ,
        movie: movie,
        main_characters: main_characters
    });
} else {
    res.render('notFound', {
        movies: movies,
        title: "This is not the page you're looking for..."
    });
}


};

// route not found response (must be below above or will take precedence)
exports.notFound = function (req, res) {
    var movies = moviesJSON.movies;

    res.render('notFound', {
        movies : movies,
        title: "This is not the page you're looking for..."
    });
};