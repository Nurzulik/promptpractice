const numberOfFilms = +prompt('Сколько фильмов вы просмотрели за последний период?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', ''),
		c = prompt('Один из просмотренных фильмов?', ''),
		d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);