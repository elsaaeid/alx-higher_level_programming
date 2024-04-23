#!/usr/bin/node

const request = require('request');

let movieId = process.argv[2];

let url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		let movie = JSON.parse(body);
		let characters = movie.characters;
	
		characters.forEach(characterUrl => {
			request(characterUrl, function (error, response, body) {
				if (error) {
					console.log(error);
				} else {
					let character = JSON.parse(body);
					console.log(character.name);
				}
			});
		});
	}
});
