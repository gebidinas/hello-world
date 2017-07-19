var movie1 = {
    title:"Superman",
    created:1989,
    actors:"Travolta",
    genre:"comedy",
    available: 0
}

var movie2 = {
    title:"Batman",
    created:1999,
    actors:"Borat",
    genre:"horror",
    available: 1
}

var movie3 = {
    title:"Dark Knight",
    created:2007,
    actors:"Tomas",
    genre:"action",
    available: 5
}

var movie4 = {
    title:"Robocop",
    created:1982,
    actors:"John Cash",
    genre:"action",
    available: 7
}

var movieList = [movie1,movie2,movie3,movie4];

function listAllMovies() {
    console.log(movieList);
}

module.exports.listAllMovies = listAllMovies;

var genre = [movie1.genre,movie2.genre,movie3.genre,movie4.genre];

function listAllGenres(){
    console.log(genre);
}

module.exports.listAllGenres = listAllGenres;