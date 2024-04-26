#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const movies = JSON.parse(body).results;
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
