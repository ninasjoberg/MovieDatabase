//Revealing Module Pattern :

let db = (function(){
	
	//returns the a number = length of the list + one. Used to create unique id:s to all new movieobjects created by the user.
	function getUniqueId(){
		return movies.length + 1;  
	}

	//list of movieobjects. 
	let movies = [
		{
			title: 'Kubo and the Two Strings',
			year: 2016,
			genres: ['Children', 'Drama', 'Animated'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SY1000_SX675_AL_.jpg',
			ratings: [4, 5, 4, 4, 3],
			actors: ['Charlize Theron', 'Art Parkinson', 'Matthew McConaughey'],
			id: 1,
		},
		{
			title: 'Arrival',
			year: 2016,
			genres: ['Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg',
			ratings: [4, 5, 5, 3],
			actors: ['Amy Adams', 'Jeremy Renner'],
			id: 2,
		},
		{
			title: 'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [5, 5, 5, 5],
			actors: ['Uma Thurman', 'David Carradine'],
			id: 3,
		},
		{
			title: 'Mad Max: Fury Road',
			year: 2015,
			genres: ['Action', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_SY1000_CR0,0,687,1000_AL_.jpg',
			ratings: [4, 3, 2, 5],
			actors: ['Tom Hardy', 'Charlize Theron'],
			id: 4,
		},
		{
			title: 'Broke back mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [4, 3, 5, 5],
			actors: ['Jake Gyllenhaal', 'Heath Ledger'],
			id: 5,
		},
		{
			title: 'Prometheus',
			year: 2012,
			genres: ['Action', 'Horror', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [4, 4, 3],
			actors: ['Noomi Rapace', 'Logan Marshall-Green'],
			id: 6,
		},
		{
			title: 'Fight Club',
			year: 1999,
			genres: ['Action', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
			ratings: [4, 4, 3, 5, 3],
			actors: ['Brad Pitt', 'Edward Norton'],
			id: 7,
		},
		{
			title: 'Pulp Fiction',
			year: 1994,
			genres: ['Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
			ratings: [4, 4, 3, 2, 2, 5],
			actors: ['John Travolta', 'Uma Thurman'],
			id: 8,
		},
		{
			title: 'The Matrix',
			year: 1999,
			genres: ['Sci-Fi', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
			ratings: [4, 5, 5, 4, 3],
			actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss '],
			id: 9, 
		},
		{
			title: 'Notting Hill',
			year: 1999,
			genres: ['Comedy', 'Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTE5OTkwYzYtNDhlNC00MzljLTk1YTktY2IxZjliZmNjMjUzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
			ratings: [3, 3, 2, 4, 5, 5],
			actors: ['Julia Roberts', 'Hugh Grant', 'Richard McCabe'],
			id: 10,
		},
		{
			title: 'Yes Man',
			year: 2008,
			genres: ['Comedy', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYyOTkyMzg2OV5BMl5BanBnXkFtZTcwODAxNjk3MQ@@._V1_.jpg',
			ratings: [4, 3, 2, 4, 3],
			actors: ['Jim Carrey', 'Zooey Deschanel'],
			id: 11,
		},
		{
			title: 'Black Hawk Down',
			year: 2001,
			genres: ['Drama', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_SX675_AL_.jpg',
			ratings: [1, 2, 1],
			actors: ['Jim Carrey', 'Zooey Deschanel'],
			id: 12,
		}
	];
	

	//returns movies - the list with all moviesobjects. This function can be reached from outside 
	//the module unlike the list movies that i want to keep private. 
	function getAllMovies(){
		return movies.filter((movie) =>{
			return movies;
		});
	}	


	//returns a list of moviesobjects filtered by genre.
	function filterByGenre(genre) {
		 return movies.filter((movie) => {
			const movieGenre = movie.genres.indexOf(genre);
			return movieGenre > -1; //indexOf returns the index of the element we are looking for, if it is not found it returns -1.
		});
	}


	//returns the movieobject with a specific id. 
	function getMovieById(id){
		return movies.find((movie) => {
			return movie.id == id;
		});
	}


	//returns the average rating of a movie
	function getAvarageRating(movieobj){
		const totalSum = movieobj.ratings.reduce(function(sum, rating){
			return sum + Number(rating); //det vi får in när det skapas nya filmer är en string
		},0);
		return (totalSum / movieobj.ratings.length).toFixed(1); //toFixed gör att jag bara får 1 decimal
	}


	//returns a list of movieobjects filtered by average rating.
	function filterByRating(rating){
		return movies.filter((movie) => {
			const average = getAvarageRating(movie);
			return average >= rating && average < rating + 1;
		});
	}


	//push a new movieobject in to the movies-array
	function addNewMovie(newMovie){
		movies.push(newMovie);
	}


	//adds rating och genres based on user input.
	function addToMovies(movie, input, type){
		if(input){
			movie[type].push(input);
		}else{
			alert('write someting in the input field!')
		}
	}


	//Revealing Module Pattern must return all functions att the end, so they are reachable from outside. 
	return{
		getUniqueId: getUniqueId,
		getAllMovies: getAllMovies,
		filterByGenre: filterByGenre,
		getMovieById: getMovieById,
		filterByRating: filterByRating,
		getAvarageRating: getAvarageRating,
		addNewMovie: addNewMovie,
		addToMovies: addToMovies,
	};

})();


//set up eventListerners
document.getElementById('select-genre').addEventListener('change', showMoviesByGenre);
document.getElementById('select-rating').addEventListener('change', showMoviesByRating);
document.getElementById('select-greatest').addEventListener('change', sortByRating);
document.getElementById('add-button').addEventListener('click', addMovie);
var movieList = document.getElementById('movie-list');


//draws all movies
showMovies(db.getAllMovies());


//writes all the dom:elements to the webpage
function showMovies(movielist){
	movieList.innerHTML = ''; //to clear the page, before creating new one
	for(let movieobj of movielist){ 
		var movieGenreList = document.createElement('li');
		movieGenreList.setAttribute('class', 'movie');
		movieList.appendChild(movieGenreList);
		movieCover = `<img src="${movieobj.cover}">`;
		const averageRating = db.getAvarageRating(movieobj);
		movieGenreList.innerHTML = `${movieCover} <br> <b> ${movieobj.title} </b> <br> <b> Year: </b> ${movieobj.year} <br> <b> Genre: </b> ${movieobj.genres} <br> <b> Actors: </b> ${movieobj.actors} <br> <b> Rating: </b> ${averageRating} of 5 <br> <b> Add genre and rating: </b>`;
		const id = movieobj.id;
		const movietitle = movieobj.title;
		const genresInput = createInputfield(movieGenreList, 'genres', id, movietitle);
		const ratingsInput = createInputfield(movieGenreList, 'ratings', id);
		document.getElementById('button_genres_' + id).addEventListener('click', addParameter);
		document.getElementById('button_ratings_' + id).addEventListener('click', addParameter);
	}
}


//when 'filter by genre' is selected at the webpage this function will run. It calls the filterByGenre 
//function and then the showMovies function with the new filtered list as parameter. 
function showMoviesByGenre(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
	}else{
		const filteredList = db.filterByGenre(event.target.value);
		showMovies(filteredList);
	}
}


//when 'filter by rating' is selected at the webpage this function will run. It calls the filterByRating 
//function and then showMovies function with the new filtered list as parameter. 
function showMoviesByRating(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
	}else{
		const filteredListRat = db.filterByRating(event.target.value);
		showMovies(filteredListRat);
	}
}


//when 'sort by rating' is selected at the webpage this function will run and sort the list by 
//averageratings and then call the showMovies function with the new filtered list as parameter. 
function sortByRating(event){
	if(event.target.value === 'All'){
		 showMovies(db.getAllMovies());
		 return; //to stop the function if target.value = 'all'
	}	 
	const allMovieList = db.getAllMovies();
	const sortedListMovie = allMovieList.sort((a, b) => {
    	return db.getAvarageRating(a) - db.getAvarageRating(b);
    });
   	if(event.target.value === 'low'){ //to check which option is selected, 'best to worst' or 'worst to best'. 
    	showMovies(sortedListMovie);	//and generate the right sorted list based on that. 
    }else{
    	showMovies(sortedListMovie.reverse());
    }
}


//creates a new movieobject when a new movie has been added at the webpage. it calls the function addNewMovie to 
//push it in to the movies-array and then calls showMovies to generate the updated movie-list. 
function addMovie(){
	var elements = document.getElementById('add-movie').elements;
	const genres = elements[2].value.split(','); //to split the string at , into an array of substrings, and returns a new array.
	const rating = elements[4].value.split(',');
	const actors = elements[5].value.split(','); 
	if(elements[0].value && elements[4].value){ //makes sure that a title and rating is provided by the user
		const id = db.getUniqueId();
		const movieObj= {
			title: elements[0].value,
			year: elements[1].value,
			genres: genres,
			cover: elements[3].value || 'http://placehold.it/600x900?text=' + elements[0].value, 
			ratings: rating,
			actors: actors,
			id: id,
		}
		db.addNewMovie(movieObj);
		showMovies(db.getAllMovies());
	}else{
		alert('Title and rating is needed.');
	}
}


//creates rating and genres inputfields to every listItem (which shows the movies).
function createInputfield(parent, type, id, movietitle){
	var input = document.createElement('input');
	input.setAttribute('class', 'input');
	input.setAttribute('placeholder', type);
	input.setAttribute('id', `input_${type}_${id}`); 
	input.setAttribute('value', '');
	parent.appendChild(input);
	createButton(parent, type, id, input);
}


//creates addButtons used with the rating and genres inputfields.
function createButton(parent, type, id, input){
	var button = document.createElement('button');
	button.textContent = `Add`;
	button.setAttribute('id', `button_${type}_${id}`); 
	button.setAttribute('class', type);
	parent.appendChild(button);
}


//callback for the eventlisterner 'addgenre' 'and addRating'
function addParameter(event){
	const split = event.target.id.split('_'); //event.target.id is the button id. the inputfield has the same id except for the first word.
	const inputId = `input_${split[1]}_${split[2]}`; //gets the input id by modifying the button's id.  
	const input = document.getElementById(inputId); //to get the input value that someone has provided
	const movieId = split[2]; //the last number in the specific button and input id is the same as the current movieobject's id. 
	const type = split[1]; //genre or rating
	const movieIdObj = db.getMovieById(movieId); //to get the movieobject that has the same id number as the inputfield and addbutton.
	db.addToMovies(movieIdObj, input.value, type);
	showMovies(db.getAllMovies());	
}





