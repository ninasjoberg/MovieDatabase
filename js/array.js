//Revealing Module Pattern :

let db = (function(){
	let currentIndex = 0; //initsierar ett id till index 0, för att kunna generera ett unikt id till varje movie. 
	let movies = [
		{
			title: 'Kubo and the Two Strings',
			year: 2016,
			genres: ['Children', 'Drama', 'Animated'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SY1000_SX675_AL_.jpg',
			ratings: [4, 5, 4, 4, 3],
			actors: ['Charlize Theron', 'Art Parkinson', 'Matthew McConaughey'],
		},
		{
			title: 'Arrival',
			year: 2016,
			genres: ['Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg',
			ratings: [4, 5, 5, 3],
			actors: ['Amy Adams', 'Jeremy Renner']
		},
		{
			title: 'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [5, 5, 5, 5],
			actors: ['Uma Thurman', 'David Carradine']
		},
		{
			title: 'Mad Max: Fury Road',
			year: 2015,
			genres: ['Action', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_SY1000_CR0,0,687,1000_AL_.jpg',
			ratings: [4, 3, 2, 5],
			actors: ['Tom Hardy', 'Charlize Theron']
		},
		{
			title: 'Broke back mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [4, 3, 5, 5],
			actors: ['Jake Gyllenhaal', 'Heath Ledger']
		},
		{
			title: 'Prometheus',
			year: 2012,
			genres: ['Action', 'Horror', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [4, 4, 3],
			actors: ['Noomi Rapace', 'Logan Marshall-Green']
		},
		{
			title: 'Fight Club',
			year: 1999,
			genres: ['Action', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
			ratings: [4, 4, 3, 5, 3],
			actors: ['Brad Pitt', 'Edward Norton']
		},
		{
			title: 'Pulp Fiction',
			year: 1994,
			genres: ['Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
			ratings: [4, 4, 3, 2, 2, 5],
			actors: ['John Travolta', 'Uma Thurman']
		},
		{
			title: 'The Matrix',
			year: 1999,
			genres: ['Sci-Fi', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
			ratings: [4, 5, 5, 4, 3],
			actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss ']
		},
		{
			title: 'Notting Hill',
			year: 1999,
			genres: ['Comedy', 'Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTE5OTkwYzYtNDhlNC00MzljLTk1YTktY2IxZjliZmNjMjUzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
			ratings: [3, 3, 2, 4, 5, 5],
			actors: ['Julia Roberts', 'Hugh Grant', 'Richard McCabe']
		},
		{
			title: 'Yes Man',
			year: 2008,
			genres: ['Comedy', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYyOTkyMzg2OV5BMl5BanBnXkFtZTcwODAxNjk3MQ@@._V1_.jpg',
			ratings: [4, 3, 2, 4, 3],
			actors: ['Jim Carrey', 'Zooey Deschanel']
		},
		{
			title: 'Black Hawk Down',
			year: 2001,
			genres: ['Drama', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_SX675_AL_.jpg',
			ratings: [1, 2, 1],
			actors: ['Jim Carrey', 'Zooey Deschanel']
		}
	];

	//return all movies
	function getAllMovies(){
		return movies.filter((movie) =>{ //för att returnera en kopia på movieslistan, så att ursprungslistan fortfarande förblir privat
			return true;
		});
	}	

	//return a list of movies filtered by genre
	function filterByGenre(genre) {
		const filteredList = movies.filter((movie) => {
			const movieGenre = movie.genres.find((gen) => {
				return gen === genre;
			}); 
			//check so that the movieobject has a genre, filter must return true or false
			if(movieGenre) { // is the same as `return a.length > 0;`
				return true;
			} else {
				return false;
			}
		});
		return filteredList;
	}

	//return a list of movies filtered by rating
	function filterByRating(rating){
		const filteredListRat = movies.filter((movie) => {
			const average = getAvarageRating(movie);
			return average >= rating && average < rating + 1;
		});
		 return filteredListRat;
	}

	//return the averagesum of a movie's ratings
	function getAvarageRating(movieobj){
		const totalSum = movieobj.ratings.reduce(function(sum, rating){
			return sum + Number(rating); //det vi får in när det skapas nya filmer är en string
		},0);
		return (totalSum / movieobj.ratings.length).toFixed(1); //toFixed gör att jag bara får 1 decimal
	}

	//push a new movieobject in to the movies-array
	function addNewMovie(newMovie){
		var newMovieArray = movies;
		newMovieArray.push(newMovie);
		movies = newMovieArray;
	}

	//Revealing Module Pattern must return all functions att the end, so they will be able to reach from outside. 
	return{
		getAllMovies: getAllMovies,
		filterByGenre: filterByGenre,
		filterByRating: filterByRating,
		getAvarageRating: getAvarageRating,
		addNewMovie: addNewMovie,
	};

})();


document.getElementById('select-genre').addEventListener('change', showMoviesByGenre);
document.getElementById('select-rating').addEventListener('change', showMoviesByRating);
document.getElementById('select-greatest').addEventListener('change', showBestOrWorstMovie);
document.getElementById('add-button').addEventListener('click', addMovie);
var movieList = document.getElementById('movie-list');

//Showing all saved movies, runs when you go in to the website or update the site
showMovies(db.getAllMovies());
console.log(db.getAllMovies());

//writes all the movies to html so they will be shown at the webpage
function showMovies(movielist){
	movieList.innerHTML = ''; //to clear the list before a new one is used
	for(let movieobj of movielist){
		var movieGenreList = document.createElement('li');
		movieGenreList.setAttribute('class', 'movie');
		movieList.appendChild(movieGenreList);
		movieCover = `<img src="${movieobj.cover}">`;
		const averageRating = db.getAvarageRating(movieobj);
		movieGenreList.innerHTML = `${movieCover} <br> <b> ${movieobj.title} </b> <br> <b> Year: </b> ${movieobj.year} <br> <b> Genre: </b> ${movieobj.genres} <br> <b> Actors: </b> ${movieobj.actors} <br> <b> Rating: </b> ${averageRating} of 5 <br> <b> Add genre and rating: </b>`;
		const genresinput = createInputfield(movieGenreList, 'genres');
		const ratingsinput = createInputfield(movieGenreList, 'rating');
	}
}

//when 'genre' is selected at the webpage this function will run and calls the filterbyGenre function and then show all movies with the new filtered list. 
function showMoviesByGenre(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
	}else{
		const filteredList = db.filterByGenre(event.target.value);
		showMovies(filteredList);
	}
}

//when 'rating' is selected at the webpage this function will run and calls the filterbyRating function and then show all movies with the new filtered list. 
function showMoviesByRating(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
	}else{
		const filteredListRat = db.filterByRating(event.target.value);
		showMovies(filteredListRat);
	}
}

//when 'sort by rating' is selected at the webpage this function will run and sort the list by averageratings and then show all movies with the new filtered list. 
function showBestOrWorstMovie(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
		 return; //to stop the function if target.value = 'all'
	}	 
	const allMovieList = db.getAllMovies();
	const sortedListMovie = allMovieList.sort((a, b) => {
    	return db.getAvarageRating(a) - db.getAvarageRating(b);
    });
   	if(event.target.value === 'low'){
    	showMovies(sortedListMovie);
    }else{
    	showMovies(sortedListMovie.reverse());
    }
}

//creates a new movieobject when a new movie has been added at the webpage, calls the function addNewMovie to push it in to the movies-array and then calls showMovies
function addMovie(){
	var elements = document.getElementById('add-movie').elements;
	const genres = elements[2].value.split(','); //Jag vill ha denna till en lista med genres
	const rating = elements[4].value.split(',');
	const actors = elements[5].value.split(','); //Jag vill ha denna till en lista med actors
	const movieObj= {
		title: elements[0].value,
		year: elements[1].value,
		genres: genres,
		cover: elements[3].value || 'http://placehold.it/600x900?text=' + elements[0].value, 
		ratings: rating,
		actors: actors,
	}
	console.log(movieObj.title);
	console.log(movieObj.buttons);
	db.addNewMovie(movieObj);
	showMovies(db.getAllMovies());
}

//creates rating and genres inputfields used when a new movieobject is added
function createInputfield(parent, type){
	const input = document.createElement('input');
	//input.textContent = type;
	input.setAttribute('class', 'input');
	input.setAttribute('type', 'text');
	input.setAttribute('name', 'genre');
	input.setAttribute('placeholder', type);
	parent.appendChild(input);	
}


