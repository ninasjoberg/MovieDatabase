//Revealing Module Pattern :
function Movie () {

}


let db = (function(){
	let movies = [
		{
			title:	'Broke back mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [1, 3, 5, 5],
			actors: [
				{
					name: 'Jake Gyllenhaal',
				},
				{
					name: 'Heath Ledger'
				}
			]
		},
		{
			title:	'Prometheus',
			year: 2012,
			genres: ['Action', 'Horror', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [4, 4, 3],
			actors: [
				{
					name: 'Noomi Rapace',
				},
				{
					name: 'Logan Marshall-Green'
				}
			]
		},
		{
			title:	'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [2, 3, 2, 4],
			actors: [
				{
					name: 'Uma Thurman',
				},
				{
					name: 'David Carradine'
				}
			]
		}
	];


		
	//funktioner som returnerar en lista med namnet på alla filmer
	function getAllMovies(){
		return movies.filter((movie) =>{ //för att returnera en kopia på movieslistan, så att ursprungslistan fortfarande förblir privat
			return true;
		});
	}	

	//pushar in en ny film i listan movie
	function addNewMovie(newMovie){
		var newMovieArray = movies;
		newMovieArray.push(newMovie);
		movies = newMovieArray;
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
	}


	function createNewMovie(title, year, genres){
		return Object.create(Movie.prototype, {
			title: { value: title },
			year: { value: year },
			genres: { value: genres },
		});
	}

	function getAvarageRating(){
		
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
var movieList = document.getElementById('movie-list');
console.log(movieList);

showMovies(db.getAllMovies());


//funktion som visar upp alla filmer på sidan. 
function showMovies(movielist){
	movieList.innerHTML = ''; //för att rensa listan innan en ny visas
	for(let movieobj of movielist){
		console.log(movieobj.title);
		var movieGenreList = document.createElement('li');
		movieList.appendChild(movieGenreList);
		movieCover = `<img src="${movieobj.cover}">`;
		movieGenreList.innerHTML = movieobj.title + movieobj.genres + movieCover;
	}
}

function showMoviesByGenre(event){
	const filteredList = db.filterByGenre(event.target.value);
	showMovies(filteredList);
}

function showMoviesByRating(event){
	const filteredListRat = db.filterByRating(event.target.value);
	console.log(filteredListRat);
	showMovies(filteredListRat);
}


