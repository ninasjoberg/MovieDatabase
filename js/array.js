const movieDatabase = {
	movies : [
		{
			title:	'Broke back mountain',
			year: 2005,
			genres: ['Drama', 'Romance'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTAzNTc1NF5BMl5BanBnXkFtZTYwNDY4MDc3._V1_.jpg',
			ratings: [0],
			actors: [
				{
					name: 'Jake Gyllenhaal',
				},
				{
					name: 'Heath Ledger',
				}
			]
		},
		{
			title:	'Prometheus',
			year: 2012,
			genres: ['Action', 'Horror', 'Sci-Fi'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
			ratings: [0],
			actors: [
				{
					name: 'Noomi Rapace',
				},
				{
					name: 'Logan Marshall-Green',
				}
			]
		},
		{
			title:	'Kill Bill: vol. 1',
			year: 2003,
			genres: ['Action', 'Crime', 'Drama'],
			cover: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
			ratings: [0],
			actors: [
				{
					name: 'Uma Thurman',
				},
				{
					name: 'David Carradine',
				}
			]
		}
	],

	//funktioner som tar mappar alla filmtitlar i listan
	getAllMovies: function(){
		return this.movies.map((movie) => {
			return movie.title;
		});
	},	

	//funktion som filtrerar filmer efter genre. Hur skicka in en genre här?? 
	getMovieByGenre: function(){
		return this.movies.filter(function(movie, index, array){
			return genres.includes('Action'); 
		
		});	
	}
};

//Consoleloggar alla filmtitlar
var getAllMovies = movieDatabase.getAllMovies();
console.log(getAllMovies); 

//Consolloggar filmer av en viss genre:
var getMovieByGenre = movieDatabase.getMovieByGenre();
console.log(getMovieByGenre);







