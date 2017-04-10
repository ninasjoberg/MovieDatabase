//Revealing Module Pattern :

let db = (function(){
	
	//returns a number = length of the list + one. Used to create unique id:s to all new movieobjects created by the user.
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
			getAvarageRating
		},
		{
			title: 'Arrival',
			year: 2016,
			genres: ['Drama', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SY1000_CR0,0,640,1000_AL_.jpg',
			ratings: [4, 5, 5, 3],
			actors: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
			id: 2,
		},
		{
			title: 'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [5, 5, 5, 5],
			actors: ['Uma Thurman', 'David Carradine', 'Daryl Hannah'],
			id: 3,
		},
		{
			title: 'Mad Max: Fury Road',
			year: 2015,
			genres: ['Action', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyMTE0ODcxNF5BMl5BanBnXkFtZTgwODE4NDQzNTE@._V1_SY1000_CR0,0,687,1000_AL_.jpg',
			ratings: [4, 3, 2, 5],
			actors: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
			id: 4,
		},
		{
			title: 'Brokeback Mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [4, 3, 5, 5],
			actors: ['Jake Gyllenhaal', 'Heath Ledger', 'Michelle Williams'],
			id: 5,
		},
		{
			title: 'Prometheus',
			year: 2012,
			genres: ['Action', 'Sci-Fi', 'Horror'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [4, 4, 3],
			actors: ['Noomi Rapace', 'Logan Marshall-Green', 'Michael Fassbender'],
			id: 6,
		},
		{
			title: 'Fight Club',
			year: 1999,
			genres: ['Action', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
			ratings: [4, 4, 3, 5, 3],
			actors: ['Brad Pitt', 'Edward Norton', 'Meat Loaf'],
			id: 7,
		},
		{
			title: 'Pulp Fiction',
			year: 1994,
			genres: ['Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
			ratings: [4, 4, 3, 2, 2, 5],
			actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
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
			title: 'Sin City',
			year: 2005,
			genres: ['Crime', 'Thriller'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
			ratings: [3, 5, 5, 4, 5, 5, 4, 4],
			actors: ['Mickey Rourke', 'Clive Owen', 'Bruce Willis'],
			id: 11,
		},
			{
			title: 'Old Boy',
			year: 2003,
			genres: ['Crime', 'Thriller'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_.jpg',
			ratings: [3, 3, 4, 5, 4, 4],
			actors: ['Min-sik Choi', 'Ji-tae Yu', 'Hye-jeong Kang'],
			id: 12,
		},
			{
			title: 'Yes Man',
			year: 2008,
			genres: ['Comedy', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYyOTkyMzg2OV5BMl5BanBnXkFtZTcwODAxNjk3MQ@@._V1_.jpg',
			ratings: [4, 3, 2, 4, 3],
			actors: ['Jim Carrey', 'Zooey Deschanel', 'Bradley Cooper'],
			id: 13,
		},
		{
			title: 'V for Vendetta',
			year: 2005,
			genres: ['Action', 'Drama', 'Thriller'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
			ratings: [4, 5, 5, 4, 5],
			actors: ['Hugo Weaving', 'Natalie Portman', 'Rupert Graves'],
			id: 14,
		},
			{
			title: 'No Country for Old Men',
			year: 2007,
			genres: ['Crime', 'Drama', 'Thriller'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg',
			ratings: [4, 5, 3, 4, 5],
			actors: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolins'],
			id: 15,
		},
		{
			title: 'Black Hawk Down',
			year: 2001,
			genres: ['Drama', 'Action'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_SX675_AL_.jpg',
			ratings: [1, 2, 1],
			actors: ['Jim Carrey', 'Zooey Deschanel', 'Tom Sizemore'],
			id: 16,
		},
		{
			title: 'Amélie',
			year: 2001,
			genres: ['Comedy', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
			ratings: [3, 3, 3, 4, 4],
			actors: ['Audrey Tautou', 'Mathieu Kassovitz', 'Rufus'],
			id: 17,
		},
		{
			title: 'High Fidelity',
			year: 2000,
			genres: ['Comedy', 'Drama'],
			cover: 'https://upload.wikimedia.org/wikipedia/en/8/8f/High_Fidelity_poster.jpg',
			ratings: [3, 3, 3, 4, 4],
			actors: ['John Cusack', 'Iben Hjejle', 'Todd Louiso'],
			id: 18,
		}
	];
	

	//returns movies - the list with all moviesobjects. This function can be reached from outside 
	//the module unlike the list movies that i want to keep private. 
	function getAllMovies(){
		return movies.map((movie) =>{
			return movie;
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
		const totalSum = movieobj.ratings.reduce((sum, rating) => {
			return sum + Number(rating); //I get a string from the inputfiels, but I want it to be a number
		},0);
		return (totalSum / movieobj.ratings.length).toFixed(1); //toFixed, I just want 1 decimal
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
		if (input === 'Genre' || input === 'Rating'){
			alert('Select an option');
		}
		else if (type == 'genres' && movie.genres.indexOf(input) >= 0){
			alert('The genre is already added');
		}
		else{
			movie[type].push(input);
		}	
	}


	//Revealing Module Pattern must return all functions at the end, so they are reachable from outside. 
	return {
		getUniqueId: getUniqueId,
		getAllMovies: getAllMovies,
		filterByGenre: filterByGenre,
		getMovieById: getMovieById,
		filterByRating: filterByRating,
		getAvarageRating: getAvarageRating,
		addNewMovie: addNewMovie,
		addToMovies: addToMovies,
	};

})(); //<-- this function executes itself, which is a part of this pattern. 




let presentation = (function(){

	//writes all the dom:elements to the webpage
	function showMovies(movielist) {
		var movieListElement = document.getElementById('movie-list');
		movieListElement.innerHTML = ''; //to clear the page, before creating new one
		for(let movieobj of movielist){ 
			var movieListItem = document.createElement('li');
			movieListItem.setAttribute('class', 'movie');
			movieListElement.appendChild(movieListItem);
			movieCover = `<img src="${movieobj.cover}">`;
			const averageRating = db.getAvarageRating(movieobj);
			movieGenres = movieobj.genres.join(', '); //to get a space between the genres.
			movieActors = movieobj.actors.join(', ');
			add = `<br> <b> Add genre and rating: </b>`;
			movieListItem.innerHTML = `${movieCover} <br> <b> ${movieobj.title} </b> <br> <b> Year: </b> ${movieobj.year} <br> <b> Genre: </b> ${movieGenres} <br> <b> Actors: </b> ${movieActors} <br> <b> Rating: </b> ${averageRating} of 5 <br> ${add}`;
			createInputfield(movieListItem, 'genres', movieobj.id);
			events.addEventListener('button_genres_' + movieobj.id, 'click', events.addParameter);
			createInputfield(movieListItem, 'ratings', movieobj.id);
			events.addEventListener('button_ratings_' + movieobj.id, 'click', events.addParameter);
		}
	}		


	//creates rating and genres dropdowns/inputs to every listItem (which shows the movies).
	function createInputfield(parent, type, id){
		const input = document.createElement('select');
		if(type === 'genres'){
			const arrayGenres = ['Genre', 'Animated', 'Action', 'Children', 'Crime', 'Comedy', 'Drama', 'Horror', 'Romance'];
			for (let i of arrayGenres){
				const option = document.createElement('option');
				option.value = i;
				option.text = i;
				input.appendChild(option);
			} 
		}
		else if(type === 'ratings'){
			const arrayGenres = ['Rating', 1, 2, 3, 4, 5];
			for (let i of arrayGenres){
				const option = document.createElement('option');
				option.value = i;
				option.text = i;
				input.appendChild(option);
			} 
		}
		input.setAttribute('class', 'input');
		input.setAttribute('placeholder', type);
		input.setAttribute('id', `input_${type}_${id}`); 
		input.setAttribute('value', '');
		parent.appendChild(input);
		createButton(parent, type, id, input);
	}


	//creates addButtons used with the rating and genres inputfields.
	function createButton(parent, type, id){
		const button = document.createElement('button');
		button.textContent = `Add`;
		button.setAttribute('id', `button_${type}_${id}`); 
		button.setAttribute('class', type);
		parent.appendChild(button);
	}


	return {
		showMovies: showMovies,
	};

})();




let events = (function(){

	//set up eventListeners
	function initEventListeners(){
		document.getElementById('select-genre').addEventListener('change', showMoviesByGenre);
		document.getElementById('select-rating').addEventListener('change', showMoviesByRating);
		document.getElementById('select-greatest').addEventListener('change', sortByRating);
		document.getElementById('add-button').addEventListener('click', addMovie);
	}

	function addEventListener(id, event, callback){
		document.getElementById(id).addEventListener(event, callback);
	}


	//callback for the eventlistener 'addgenre' 'and addRating'
	function addParameter(event){
		const split = event.target.id.split('_'); //event.target.id is the button id. the inputfield has the same id except for the first word. ex: button_ratings_3 vs. input_ratings_3
		const inputId = `input_${split[1]}_${split[2]}`; //gets the input id by modifying the button's id. 
		const input = document.getElementById(inputId); //to get the input value that someone has provided
		const movieId = split[2]; //the last number in the specific button and input id is the same as the current movieobject's id. 
		const type = split[1]; //genre or rating
		const movieIdObj = db.getMovieById(movieId); //to get the movieobject that has the same id number as the inputfield and addbutton.
		db.addToMovies(movieIdObj, input.value, type);
		presentation.showMovies(db.getAllMovies());	
	}


	//when 'filter by genre' is selected at the webpage this function will run. It calls the filterByGenre 
	//function and then the showMovies function with the new filtered list as parameter. 
	function showMoviesByGenre(event){
		resetValues('select-greatest');
		resetValues('select-rating');
		if(event.target.value === 'All'){
			 presentation.showMovies(db.getAllMovies());
		}else{
			const filteredList = db.filterByGenre(event.target.value);
			presentation.showMovies(filteredList);
		}
	}


	//when 'filter by rating' is selected at the webpage this function will run. It calls the filterByRating 
	//function and then showMovies function with the new filtered list as parameter. 
	function showMoviesByRating(event){
		resetValues('select-genre');
		resetValues('select-greatest')
		if(event.target.value === 'All'){
			 presentation.showMovies(db.getAllMovies());
		}else{
			const filteredListRat = db.filterByRating(event.target.value);
			presentation.showMovies(filteredListRat);
		}
	}


	//when 'sort by rating' is selected at the webpage this function will run and sort the list by 
	//averageratings and then call the showMovies function with the new filtered list as parameter. 
	function sortByRating(event){
		resetValues('select-genre');
		resetValues('select-rating');
		if(event.target.value === 'All'){
			 presentation.showMovies(db.getAllMovies());
			 return; //to stop the function if target.value = 'all'
		}	 
		const allMovieList = db.getAllMovies();
		const sortedListMovie = allMovieList.sort((a, b) => {
	    	return db.getAvarageRating(a) - db.getAvarageRating(b);
	    });
	   	if(event.target.value === 'low'){ //to check which option is selected, 'best to worst' or 'worst to best'. 
	    	presentation.showMovies(sortedListMovie);	//and generate the right sorted list based on that. 
	    }else{
	    	presentation.showMovies(sortedListMovie.reverse());
	    }
	}

	//resets selector
	function resetValues(id){
		document.getElementById(id).selectedIndex = "0";
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
			presentation.showMovies(db.getAllMovies());
			document.getElementById('add-movie').reset();
		}else{
			alert('Title and rating is needed.');
		}
	}


	return {
		initEventListeners: initEventListeners,
		addEventListener: addEventListener,
		addParameter: addParameter,
	};

})();


//draws all movies
presentation.showMovies(db.getAllMovies());
//calls the set up eventlistener function/module
events.initEventListeners();










