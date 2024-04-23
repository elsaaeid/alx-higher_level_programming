#!/usr/bin/node
const request = require('request');

let url = process.argv[2];

request(url, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		let movies = JSON.parse(body).results;
		let counter = 0;
		movies.forEach(movie => {
			movie.characters.forEach(character => {
				if (character.includes('/18/')) {
					counter++;
				}
			});
		});
		console.log(counter);
	}
});
