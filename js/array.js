//Revealing Module Pattern :
function Movie () {

}

let db = (function(){
	let movies = [
		{
			title: 'Kubo and the Two Strings',
			year: 2016,
			genres: ['Children', 'Drama', 'Animated'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SY1000_SX675_AL_.jpg',
			ratings: [4, 5, 4, 4, 3],
			actors: ['Charlize Theron', 'Art Parkinson', 'Matthew McConaughey']
		},
		{
			title: 'Arrival',
			year: 2016,
			genres: ['Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg',
			ratings: [4, 5, 5],
			actors: ['Amy Adams', 'Jeremy Renner']
		},
		{
			title: 'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [2, 3, 2, 4],
			actors: ['Uma Thurman', 'David Carradine']
		},
		{
			title: 'Mad Max: Fury Road',
			year: 2015,
			genres: ['Action', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_SY1000_CR0,0,687,1000_AL_.jpg',
			ratings: [4, 3, 2, 5],
			actors: ['Tom Hardy','Charlize Theron']
		},
		{
			title: 'Broke back mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [1, 3, 5, 5],
			actors: ['Jake Gyllenhaal', 'Heath Ledger']
		},
		{
			title: 'Prometheus',
			year: 2012,
			genres: ['Action', 'Horror', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [4, 4, 3],
			actors: ['Noomi Rapace','Logan Marshall-Green']
		},
		{
			title: 'Fight Club',
			year: 1999,
			genres: ['Action', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
			ratings: [4, 4, 3, 5, 3],
			actors: ['Brad Pitt','Edward Norton']
		},
		{
			title: 'Pulp Fiction',
			year: 1994,
			genres: ['Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
			ratings: [4, 4, 3, 2, 2, 5],
			actors: ['John Travolta','Uma Thurman']
		},
		{
			title: 'The Matrix',
			year: 1999,
			genres: ['Sci-Fi', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
			ratings: [4, 5, 5, 4, 5],
			actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss ']
		}
	];

		
	//funktioner som returnerar en lista med namnet på alla filmer
	function getAllMovies(){
		return movies.filter((movie) =>{ //för att returnera en kopia på movieslistan, så att ursprungslistan fortfarande förblir privat
			return true;
		});
	}	


	//funktion som tar ut film baserat på filmnamn
	function filterMovies(title){
		return movies.filter((movie) => {
			return movie.title === title;
		});	
	}


	function filterByGenre(genre) {
		const filteredList = movies.filter((movie) => {
			const movieGenre = movie.genres.find((gen) => {
				return gen === genre;
			});
			if(movieGenre) { // is the same as `return a.length > 0;`
				return true;
			} else {
				return false;
			}
		});
		return filteredList;
	}


	function filterByRating(rating){

		/*
		const filteredListRat = movies.filter((movie) => {
			const movieRating = movie.ratings.find((rate) => {
				return rate == rating; //två likamedtecken då siffran är skriven som en sträng i html. 
			});
			if(movieRating){
				return true;
			}else{
				return false;
			}
		});
		 return filteredListRat;

		 */
	}




	function createNewMovie(movieObj){
		console.log(movieObj);
		return Object.create(Movie.prototype, {
			title: { value: movieObj.title },
			year: { value: movieObj.year },
			genres: { value: movieObj.genres },
			cover: { value: movieObj.cover },
			ratings: { value: movieObj.ratings },
			actors: { value: movieObj.actors },
		});
	}

	//pushar in en ny film i listan movie
	function addNewMovie(newMovie){
		var newMovieArray = movies;
		newMovieArray.push(newMovie);
		movies = newMovieArray;
	}




	/*
	//funktion som lägger till rating till en viss film, tar input från knapptryck
	function rateMovie(event){
		movies.ratings.push(input.val);
	}
	*/
	


	function getTopRatedMovie(){
		return movies.filter((movie) => {

		})
	}

	function getWorstRatedMovie(){

	}

	function getMoviesByYear(year){

	}

	function returnMovies() {
	    return movies;
	}
	
	
	return{
		getAllMovies: getAllMovies,
		returnMovies: returnMovies,
		addNewMovie: addNewMovie,
		filterMovies: filterMovies,
		createNewMovie: createNewMovie,
		//rateMovie: rateMovie(event)
		filterByGenre: filterByGenre,
		filterByRating: filterByRating,
	};

})();


document.getElementById('select-genre').addEventListener('change', showMoviesByGenre);
document.getElementById('select-rating').addEventListener('change', showMoviesByRating);
document.getElementById('create-button').addEventListener('click', addMovie);
var movieList = document.getElementById('movie-list');
console.log(movieList);

showMovies(db.getAllMovies());


//funktion som visar upp alla filmer på sidan. 
function showMovies(movielist){
	movieList.innerHTML = ''; //för att rensa listan innan en ny visas
	for(let movieobj of movielist){
		console.log(movieobj.title);
		var movieGenreList = document.createElement('li');
		movieGenreList.setAttribute('class', 'movie');
		movieList.appendChild(movieGenreList);
		movieCover = `<img src="${movieobj.cover}">`;
		const averageRating = getAvarageRating(movieobj); 
		console.log(averageRating);
		movieGenreList.innerHTML = `${movieCover} <br> <b> ${movieobj.title} </b> <br> <b> Year: </b> ${movieobj.year} <br> <b> Genre: </b> ${movieobj.genres} <br> <b> Actors: </b> ${movieobj.actors} <br> <b> Rating: </b> ${averageRating} of 5`;
	}
}

//funktion som ger medelvärdet av ratingen
function getAvarageRating(movieobj){
	const totalSum = movieobj.ratings.reduce(function(sum, rating){
		return sum + rating;
	},0);

	return (totalSum / movieobj.ratings.length).toFixed(1); //toFixed gör att jag bara får 1 decimal
}


function showMoviesByGenre(event){
	if(event.target.value === 'All'){
		const holeList = getAllMovies();
	}else{
	const filteredList = db.filterByGenre(event.target.value);
	showMovies(filteredList);
	}
}


function showMoviesByRating(event){
	console.log(event);
	const filteredListRat = db.filterByRating(event.target.value);
	console.log(filteredListRat);
	showMovies(filteredListRat);
}


function addMovie(){
	var elements = document.getElementById('add-movie').elements;
	const genres = elements[2].value.split(','); //Jag vill ha denna till en lista med genres
	const actors = elements[5].value.split(','); //Jag vill ha denna till en lista med actors
	
	const movieObj= {
		title: elements[0].value,
		year: elements[1].value,
		genres: genres,
		img: elements[3].value,
		ratings: elements[4].value,
		actors: actors
	}

	const newMovie = db.createNewMovie(movieObj);
	db.addNewMovie(newMovie);
	showMovies(db.getAllMovies());
}


